const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method =  req.method;
    
    if ( url === '/'){
        res.write('<html>');
        res.write('<hear><title>Enter Message </title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="Submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    
    }
    if( url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) =>{
            body.push(chunk);
        });
        return req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, (err)=> {
                res.writeHead( 302 , {
                    'Location': '/'
                })
                return res.end();
            });
        })
    }
    
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<hear><title>My first page </title></head>');
    res.write('<body><h1>Hello from my Node.js server</h1></body>');
    res.write('</html>');
    res.end();

}

// module.exports = requestHandler;

// module.exports = {
//     handler:requestHandler,
//     sometext: "Some text to test "
// };

module.exports.handler = requestHandler;
// exports.handler = requestHandler;
module.exports.sometext = "Some text to test";

// to export multiple modules 