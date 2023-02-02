const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) =>
{
    res.statusCode = 200;
    res.setHeader('Content_type', 'text/html');
    res.end('<h1>THIS IS TALHA AND IM A BEGINNER LEVEL SOFTWARE DEVELOPER</h1><P1> THIS THING IS GOING TO BE VERY AMAZING</P1> ');
}
)
server.listen( PORT   ,()=>{
    console.log('server is listening on port ')
});
module.exports = (load1);
