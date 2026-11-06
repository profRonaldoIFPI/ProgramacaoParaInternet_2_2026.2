import Pessoa from "../models/Pessoa.js";

//CRUD
export const create = async (req, res)=>{ //post
    try{
        const {nome, idade, email } = req.body;
        const novaPessoa = new Pessoa(nome, idade, email);
        await novaPessoa.save(); //salva no BD
        res.status(201).json(novaPessoa);

    } catch(error){
        res.status(400).json(
            {
                resposta: "Não foi possivel registrar.",
                detalhes: error.message //pode estar errado?
            }
        );       
    }
};
export const retreave = async (req, res)=>{ //get
    try{
        const pessoas = await Pessoa.findAll();
        res.status(200).json(pessoas);
    } catch(error){
        res.status(400).json(
            {
                resposta: "Falha ao recuperar conteúdo",
                detalhes: error.message 
            }
        );       
    }
};
export const read = async (req, res)=>{ //get
    try{
        const { id } = req.params;
        const pessoa = await Pessoa.findByPk(id);
        if(!pessoa){
            res.status(404).json({ mensagem: "Não há registro com o id "+id});
        }
        res.status(200).json(pessoa);
    }catch(error){
        res.status(400).json(
            {
                resposta: "Falha ao recuperar conteúdo",
                detalhes: error.message 
            }
        );  
    }
};
export const update = async (req, res)=>{ //put 
    try{
        const { id } = req.params;
        const { nome, idade, email } = req.body;

        const pessoa = await Pessoa.findByPk(id);
        if(!pessoa){
            res.status(404).json({ mensagem: "Não há registro com o id "+id});
        }
        await pessoa.update(nome, idade, email);
        res.status(200).json(pessoa);

    }catch(error){
        res.status(400).json(
            {
                resposta: "Falha ao recuperar conteúdo",
                detalhes: error.message 
            }
        );  
    }
};
export const erase = async (req, res)=>{ //delete
    try{
        const { id } = res.params;
        const pessoa = await Pessoa.findByPk(id);
        if (!pessoa){ //se nao encontrou
            res.status(400).json({
                mensagem: "Nenhum registro deletado."
            })
        }
        const num = await pessoa.destroy();
        if (num===1){
            res.status(200).json({
                mensagem: "Registro deletado.",
                registro: pessoa
            })
        }
    }catch(error){
        res.status(400).json(
            {
                resposta: "Falha ao deletar conteúdo",
                detalhes: error.message 
            }
        );
    }
};