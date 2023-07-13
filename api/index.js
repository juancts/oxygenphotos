const server = require("./src/app.js");

console.log(server)

server.listen(3001, ()=>{console.log("Server listening on PORT 3001")})