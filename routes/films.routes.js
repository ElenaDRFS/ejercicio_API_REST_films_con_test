const filmController = require('../controllers/films.controllers');
const router = require('express').Router();

router.get('/api/film/:title', filmController.getFilm);

router.post('/api/film/', filmController.postFilm);

router.put('/api/film/', filmController.putFilm);

router.delete('/api/film/', filmController.deleteFilm);

module.exports = router;