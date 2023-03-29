const http = require('http')

const PORT = 8080

const server = http.createServer((request, response) => {
    // https://freeipapi.com/api/json/{ip}
    const json = {
        httpVersion: request.httpVersion,
        remoteAddress: request.socket.remoteAddress,
        method: request.method,
        url: request.url,
        headers: request.headers
    }
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.write(JSON.stringify(json))
    response.end()
})

server.listen(PORT)
console.log(`server on port ${PORT}`)