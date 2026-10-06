import * as produtosModel from "../models/produtosModel.js";

export const create = async (req, res) => {
    const produto = req.body;
    const produtoCriado = await produtosModel.create(produto);
    res.status(201).json(produtoCriado);
};

export const retreave = async (req, res) => {
    const produtos = await produtosModel.retreave();
    res.status(200).json(produtos);
};

export const read = async (req, res) => {
    const id = req.params.id;
    const produto = await produtosModel.read(id);

    if (produto) {
        res.status(200).json(produto);
    } else {
        res.status(204).send("Produto não encontrado.");
    }
};

export const update = async (req, res) => {
    const id = req.params.id;
    const { nome, preco, categoria } = req.body;
    const produto = await produtosModel.update(id, nome, preco, categoria);

    if (produto) {
        res.status(200).json(produto);
    } else {
        res.status(204).send("Produto não encontrado.");
    }
};

export const remove = async (req, res) => {
    const id = req.params.id;
    const produtoRemovido = await produtosModel.remove(id);

    if (produtoRemovido) {
        res.status(200).json(produtoRemovido);
    } else {
        res.status(404).send("Produto não encontrado.");
    }
};