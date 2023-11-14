const fetchApi = require('../utils/fetchFilms');

const getFilm = async (req, res) => {

   try{
        let response = await fetchApi.fetchFilm; //{}
        let films = await response.json(); //{}
        res.status(200).json(films); 

    }catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`}); 

}};

const postFilm = (req, res) => {

    const title = req.params.title;
    res.status(200).json({msj:`Se ha guardado ${title}`}); 

}
const putFilm = (req, res) => {
    const id = req.params.id
    res.status(200).json({id: id, msj:`Has modificado:${id}`});
};

const deleteFilm = (req, res) => {
    const id = req.params.id
    res.status(200).json({id: id, msj:`Has borrado:${id}`});
};


module.exports = {
    getFilm,
    postFilm,
    putFilm,
    deleteFilm

}