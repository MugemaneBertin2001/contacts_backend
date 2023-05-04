const http = require("node:http");


const hostname = "127.0.0.1";
const port =3000;

const server = http.createServer((req,res)=>{
	res.stusCode = 200;
	res.setHeader('Context-Type', 'text/plain');
	res.end('Hello, World!');

});

server.listen(port, hostname, ()=>{
	console.log(`Server is running on :: ${hostname}:${port}`);

});
