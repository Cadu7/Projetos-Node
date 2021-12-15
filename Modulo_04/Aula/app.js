const express = require('express');

const app = express();

app.use('/product',( req , res , next ) => {
    res.send('<h1>HELLO FROM product</h1>');
});

app.use('/',( req , res , next ) => {
    console.log("In the another middleware");
    res.send('<h1>HELLO FROM EXPRESS</h1>');
});

app.listen(8080);