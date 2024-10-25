const treinadorModel = require('../models/treinadorModel');

const getAllPokemons = (req,res) => {
    const treinadores = treinadoresModel.getTreinadores();
    res.render('index', {treinadores});
};

const getTreinadores = (req,res) =>{
    const treinador = treinadorModel.getTreinadoresById(req.params.id);

    if(treinador){
        res.render('treinador', {treinador});
    }else{
            res.status(404).send ('Treinador não encontrado');
    }
    
};
module.exports = { getAllTreinadores, getTreinadorById, createTreinador}