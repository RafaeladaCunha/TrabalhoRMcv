const { Sequelize, DataTypes } = require('sequelize');

// Inicialize o Sequelize com suas configurações de banco de dados
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql' // ou 'postgres', 'sqlite', etc.
});

const Treinador = sequelize.define('Treinador', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

const criarTreinadores = async () => {
    try {
        await sequelize.authenticate(); // Verifica a conexão
        await Treinador.sync(); // Sincroniza o modelo com o banco
        await Treinador.bulkCreate([
            { nome: `Paulo` },
        ]);
        console.log('Treinadores criados com sucesso!');
    } catch (error) {
        console.error('Erro ao criar treinadores:', error);
    }
};

criarTreinadores();
module.exports = Treinador;



















/*const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql' // ou o seu banco de dados
});

const Treinador = sequelize.define('Treinador', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

// Função para criar treinadores iniciais
const criarTreinadoresIniciais = async () => {
    await Treinador.sync(); // Cria a tabela se não existir
    await Treinador.bulkCreate([
        { nome: 'Paulo' },
        // Adicione mais treinadores aqui se necessário
    ]);
};

criarTreinadoresIniciais();

module.exports = Treinador;
