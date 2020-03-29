const app = require('express');
const request = require('request');

const router = app.Router();


var nnModelUrl = 'http://chess-keras-model.herokuapp.com';
var dbUrl = 'https://nodemysqlchess.herokuapp.com';


router.get('/', (req,res,next)=>{
    res.status(200).json({response:'success'});
});

router.get('/predict', (req, res, next)=>{
    console.log("Test")
    const options = {
        url: nnModelUrl + '/predict',
        method: 'GET',
        json: req.query
    };
    request(options, (err, response, body) => {
        if(err)
            res.status(500).json({response:false});

        res.status(200).json(body);
    });
});

router.get("/games", (req, res) => {
    const options = {
        url: dbUrl + '/games',
        method: 'GET',
        json: req.query
    };
    request(options, (err, response, body) => {
        if(err)
            res.status(500).json({response:false});

        res.status(200).json(body);
    });
});

//add game
router.post('/games', (req, res) => {
    const options = {
        url: dbUrl + '/games',
        method: 'POST',
        json: req.query
    };
    request(options, (err, response, body) => {
        if(err)
            res.status(500).json({response:false});

        res.status(200).json(body);
    });
});

router.get("/users", (req, res) => {
    const options = {
        url: dbUrl + '/users',
        method: 'GET',
        json: req.query
    };
    request(options, (err, response, body) => {
        if(err)
            res.status(500).json({response:false});

        res.status(200).json(body);
    });
});

//agregar
router.post('/users', (req, res) => {
    const options = {
        url: dbUrl + '/games',
        method: 'POST',
        json: req.query
    };
    request(options, (err, response, body) => {
        if(err)
            res.status(500).json({response:false});

        res.status(200).json(body);
    });
});

module.exports = router