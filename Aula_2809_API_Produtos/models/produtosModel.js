import fs from "fs";

const carregarProdutos = async ()=>{
    try{
        let produtos = await fs.readFile("produtos.json", "utf-8");
        produtos = JSON.parse(produtos);
        return produtos;
    } catch(e){
        console.log("[Carregar arquivo] Algo deu errado: "+ e);
        return [];
    }
};

const salvarProdutos = async (produtos) => {
    try{
        await fs.writeFile("produtos.json", JSON.stringify(produtos,null,2));
        return "Arquivo salvo.";
    }catch(e){
        console.log("[Salvar arquivo] Algo deu errado: "+ e);
        return "Arquivo não foi salvo: "+e;
    }
};
//CRUD 
export const create = async (produto) => {
    let produtos = await carregarProdutos();
    produtos.push(produto);
    salvarProdutos(produtos);
    return produto;
/* poderja ser:
    return await salvarProdutos(carregarProdutos().push(produto));
*/
};

export const retreave = async () =>{
    return await carregarProdutos();
};

export const read = async (id) => {
    const produtos = await carregarProdutos();
    const idNum = parseInt(id,10); //id numericom com no máximo 10 digitos
    return produtos.find((p)=> p.id === idNum) | [];
};