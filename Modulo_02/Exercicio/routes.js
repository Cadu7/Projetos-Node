
const userList = [];

const requestHandler = ( req ,  res )  => {

    const url = req.url;
    const method = req.method;

    if( url === "/"){
        res.setHeader('Content-Type' , 'text/html');

        res.write('<html>');
        res.write('<hear><title>Initial Page</title></head>');
        res.write("<body><h1>Hello, it's from node server</h1>");
        res.write('<h3>Enter with username</h3><form action="/create-user" method="POST"><input type="text" name="username"><button type="Submit">Send</button></form></body>');
        res.write('</html>');

        return res.end();
        
    }
    if( url === "/user"){

        res.setHeader('Content-Type' , 'text/html');

        res.write('<html>');
        res.write('<hear><title>Oage of user</title></head>');
        res.write("<body><h1>User's List</h1><ui>");
        userList.map(username =>{
            res.write(`<li>${username}</li>`)
        });
        res.write("</ui></body>");
        res.write('</html>');

        return res.end();
    }
    if( url === "/create-user" && method === "POST" ){
        const body = [];
        req.on('data', chunk =>{
            body.push(chunk);
        });
        return req.on('end', ()=>{

            const parseBody = Buffer.concat(body).toString();
            const name = parseBody.split("=")[1].replace( "+" , " " );

            userList.push(name);
            
            console.log(name);

            res.writeHead(302,{
                "Location" : "/"
            });
            return res.end();

        });


    }


};

module.exports = requestHandler;