import * as produtosModel from "../models/produtosModel.js"

const produtoNovoTeste = {
    nome: "Tecladdo Gammer",
    preco: 230.50,
    categoria: "informática"
}

console.log(produtosModel.create(produtoNovoTeste));