const express = require('express');

//const recipeRouter = require('./recipes/recipeRouter');

const server = express();
const port = 5050;

server.use(express.json());

server.get('/', (req,res) => {

    res.send(`<h2>its up !</h2>`);

})



server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});