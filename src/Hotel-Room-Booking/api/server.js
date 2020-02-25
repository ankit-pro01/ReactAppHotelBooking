const http = require("http");
const app = require("./app/app/app")

const server = http.createServer(app);


server.listen(8080 ,() =>{
    console.log(" server is listening... ");
    
})