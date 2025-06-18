const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs'); // Importa o bcryptjs para hash de senhas

const app = express();

// Objeto para conectar e conversar com o banco
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',      // Altere para o nome do seu user no MySQL
    password: 'senai', // Altere para a senha correta
    database: 'crud_cliente_demo',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.use(cors());
app.use(express.json());

// --- ROTAS PARA GERENCIAMENTO DE USUÁRIOS (substituindo clientes) ---

// POST /usuarios: Cadastro de um novo usuário
app.post('/usuarios', async (req, res) => {
    const { nome, usuario, senha, idade } = req.body;

    // Validação básica de entrada
    if (!nome || !usuario || !senha || idade === undefined) { // 'idade === undefined' para permitir 0
        return res.status(400).json({ error: 'Todos os campos (nome, usuario, senha, idade) são obrigatórios.' });
    }
    if (typeof idade !== 'number' || idade < 0) {
        return res.status(400).json({ error: 'Idade deve ser um número válido e não negativo.' });
    }

    try {
        // 1. Gerar o hash da senha antes de salvar no banco
        const salt = await bcrypt.genSalt(10); // Gera um "sal" aleatório para a senha
        const senha_hash = await bcrypt.hash(senha, salt); // Aplica o hash na senha com o sal

        // 2. Inserir o novo usuário no banco de dados
        const [result] = await pool.query(
            'INSERT INTO usuarios (nome, usuario, senha_hash, idade) VALUES (?, ?, ?, ?)',
            [nome, usuario, senha_hash, idade]
        );

        // 3. Retornar os dados do usuário cadastrado (sem a senha_hash por segurança)
        const [novoUsuario] = await pool.query('SELECT id, nome, usuario, idade FROM usuarios WHERE id = ?', [result.insertId]);
        res.status(201).json(novoUsuario[0]); // Retorna o usuário criado com status 201 Created

    } catch (err) {
        console.error('Erro ao cadastrar usuário:', err.message);
        // Tratar erro de duplicidade de nome de usuário (se 'usuario' for UNIQUE)
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'Nome de usuário já cadastrado. Por favor, escolha outro.' });
        }
        res.status(500).json({ error: 'Erro interno do servidor ao cadastrar usuário.' });
    }
});

// GET /usuarios: Listar todos os usuários (sem a senha_hash)
app.get('/usuarios', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT id, nome, usuario, idade FROM usuarios');
        res.json(rows);
    } catch (err) {
        console.error('Erro ao buscar usuários:', err.message);
        res.status(500).json({ error: 'Erro ao buscar usuários.' });
    }
});

// GET /usuarios/:id: Buscar um usuário por ID (sem a senha_hash)
app.get('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT id, nome, usuario, idade FROM usuarios WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }
        res.json(rows[0]);
    } catch (err) {
        console.error('Erro ao buscar usuário por ID:', err.message);
        res.status(500).json({ error: 'Erro ao buscar usuário.' });
    }
});

// PUT /usuarios/:id: Atualizar um usuário existente (não permite alterar a senha diretamente aqui)
app.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, usuario, idade } = req.body; // Senha não deve ser atualizada por esta rota

    // Validação básica de entrada
    if (!nome || !usuario || idade === undefined) {
        return res.status(400).json({ error: 'Nome, usuário e idade são obrigatórios para atualização.' });
    }
    if (typeof idade !== 'number' || idade < 0) {
        return res.status(400).json({ error: 'Idade deve ser um número válido e não negativo.' });
    }

    try {
        const [result] = await pool.query(
            'UPDATE usuarios SET nome = ?, usuario = ?, idade = ? WHERE id = ?',
            [nome, usuario, idade, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }
        const [usuarioAtualizado] = await pool.query('SELECT id, nome, usuario, idade FROM usuarios WHERE id = ?', [id]);
        res.json(usuarioAtualizado[0]);
    } catch (err) {
        console.error('Erro ao atualizar usuário:', err.message);
        // Tratar erro de duplicidade de nome de usuário ao atualizar
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'Nome de usuário já está em uso por outro usuário.' });
        }
        res.status(500).json({ error: 'Erro ao atualizar usuário.' });
    }
});

// DELETE /usuarios/:id: Deletar um usuário
app.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }
        res.json({ message: 'Usuário deletado com sucesso.' });
    } catch (err) {
        console.error('Erro ao deletar usuário:', err.message);
        res.status(500).json({ error: 'Erro ao deletar usuário.' });
    }
});

// POST /login: Autenticação de usuário
app.post('/login', async (req, res) => {
    const { usuario, senha } = req.body;

    if (!usuario || !senha) {
        return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
    }

    try {
        // 1. Buscar o usuário pelo nome de usuário
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]);
        if (rows.length === 0) {
            return res.status(401).json({ error: 'Credenciais inválidas.' }); // Usuário não encontrado
        }

        const user = rows[0];
        // 2. Comparar a senha fornecida com o hash armazenado
        const isMatch = await bcrypt.compare(senha, user.senha_hash);

        if (!isMatch) {
            return res.status(401).json({ error: 'Credenciais inválidas.' }); // Senha incorreta
        }

        // Se o login for bem-sucedido, retorne os dados do usuário (sem a senha_hash)
        res.json({ message: 'Login bem-sucedido!', user: { id: user.id, nome: user.nome, usuario: user.usuario, idade: user.idade } });

    } catch (err) {
        console.error('Erro no processo de login:', err.message);
        res.status(500).json({ error: 'Erro interno do servidor durante o login.' });
    }
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});