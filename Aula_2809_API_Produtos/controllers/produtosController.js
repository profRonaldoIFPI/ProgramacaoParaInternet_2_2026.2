export const crate = (req, res) => {
    const produto = req.body;
    //TODO gravar novo produto no model

};
export const retreave = (req, res) => {    
    const produtos = []; //TODO carregar a lista
    res.status(200).json(produtos);

};
//TODO...
// export const read = (req, res) => {};
// export const update = (req, res) => {};
// export const delete = (req, res) => {};