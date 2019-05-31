const server = require("http").createServer();
const fs = require("fs");

server.on("request", (request, response) => {
    if (request.method === "GET" && request.url === "/hello") {
        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
        fs.readFile("./index.html", "utf-8", (err, data) => {
            if (err) throw err;
            response.write(data);
            response.end();
        });
    } else {
        response.writeHead(404, { "Content-Type": "image/jpeg" });
        fs.readFile("./Cat-404.jpg", (err, data) => {
            if (err) throw err;
            response.write(data);
            response.end();
        });
    }
});

server.listen(8080);
