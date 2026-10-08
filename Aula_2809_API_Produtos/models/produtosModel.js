import fs from "fs";

//resolve o contexto do arquivo
const arquivo = new URL("./produtos.json",import.meta.url);

const carregarProdutos = async ()=>{
    try{
        let produtos = await fs.promises.readFile(arquivo, "utf-8");
        produtos = JSON.parse(produtos);
        return produtos;
    } catch(e){
        console.log("[Carregar arquivo] Algo deu errado: "+ e);
        return [];
    }
};

const salvarProdutos = async (produtos) => {
    try{
        await fs.promises.writeFile(arquivo, JSON.stringify(produtos,null,2));
        return "Arquivo salvo.";
    }catch(e){
        console.log("[Salvar arquivo] Algo deu errado: "+ e);
        return "Arquivo não foi salvo: "+e;
    }
};
//CRUD 
export const create = async (produto) => {
    let produtos = await carregarProdutos();
    let idNovo;

    if(produtos.length>0){
         idNovo = produtos[produtos.length-1].id+1; //gambiarra
    } else {
        idNovo = 1;
    }
    const produtoNovo =  {
            id: idNovo,
            nome: produto.nome,
            preco: produto.preco,
            categoria: produto.categoria
        };
    console.log(produtoNovo);
    produtos.push(produtoNovo);
    salvarProdutos(produtos);
    return produto;
};

export const retreave = async () =>{
    return await carregarProdutos();
};

export const read = async (id) => {
    const produtos = await carregarProdutos();
    const idNum = parseInt(id,10); //id numericom com no máximo 10 digitos
    const produto = produtos.find((p)=> p.id === idNum);
    if (produto == null){
        return [];
    }
    return produto;
};

export const update = async (id, nome, preco, catecoria) => {
    const produtos = await carregarProdutos();
    const idNum = parseInt(id,10); 
    const index = produtos.findIndex((p)=> p.id === idNum);
    if (index ===-1) { //não tem produto com este id
        return []; 
    }
    produtos[index] = {
        id: idNum,
        nome: nome,
        preco: preco,
        catecoria: catecoria 
    }
    salvarProdutos(produtos);
    return produtos[index];  
};

export const remove = async (id) => {
    const produtos = await carregarProdutos();
    const idNum = parseInt(id);
    const index = produtos.findIndex((p)=> p.id === idNum);
    const produtoRemovido = produtos.splice(index, 1);
    salvarProdutos(produtos);
    return produtoRemovido;
};