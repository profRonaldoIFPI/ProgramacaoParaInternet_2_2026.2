import * as produtosModel from "../models/produtosModel.js"

export const create = (req, res) => {
    let produto = req.body;
    produto = produtosModel.create(produto);
    res.status(201).json(produto);
};
export const retreave = (req, res) => {    
    const produtos = produtosModel.retreave();
    res.status(200).json(produtos);
};
export const read = (req, res) => {
    const id = req.params.id;
    const produto = []; //TODO carregar um produto via model 
    if (produto.length > 0){
        res.status(200).json(produto);  //TODO implementar HETEOAS
    } else {
        res.status(204).send("Produto não encontrado.")
    }

};
export const update = (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    const produto = []; //TODO definir regra para o update no model
    if (produto.length > 0){
        res.status(200).json(produto);  //TODO implementar HETEOAS
    } else {
        res.status(204).send("Produto não encontrado.");
    }
};
export const remove = (req, res) => { //delete é palavra reservada
    const id = req.params.id;
    const produto = []; //TODO identifica e apaga via model 
    if (produto.length = 0){ //provisório
        res.status(204).send("Produto removido.");  //TODO implementar HETEOAS
    } else {
        res.status(404).send("Produto não encontrado.")
    }

};