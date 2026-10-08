import * as produtosModel from "../models/produtosModel.js"

const produtoNovoTeste = {
    nome: "PC Gamer",
    preco: 4000.00,
    categoria: "informática"
}

console.log("create -----------------------------");
console.log(await produtosModel.create(produtoNovoTeste));
// console.log("Retreave -----------------------------");
// console.log(await produtosModel.retreave());
// console.log("Read ---------------------------------");
// console.log(await produtosModel.read(2));
// console.log("Update ---------------------------------");
// console.log(await produtosModel.update(1, "PC Gamer", 4000.00, "informática"));
// console.log("Remove ---------------------------------");
// console.log(await produtosModel.remove(1));