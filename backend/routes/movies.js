let express = require('express');
let router = express.Router();
let movies = require('../movies.json');
router.get('/', function (req, res, next) {
    res.send(movies)
});

router.get('/:id', function (req, res, next) {
    let id = parseInt(req.params.id, 10)
    let movie = movies.filter(function (movie) {
        return movie.id === id
    });
    res.send(movie)
});
module.exports = router;