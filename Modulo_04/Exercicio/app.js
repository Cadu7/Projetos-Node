const express =  require('express');

const app = express();

app.use('/user',( req , res , next ) => {
    console.log('Passing by the first middleware');
    res.send("<h2>I'm using the express on path '/user' </h2>")
});

app.use(( req , res , next ) => {
    console.log('Passing by the seconde middleware');
    res.send("<h2>Hello, I'm from node server</h2>");
});

app.listen(8080);