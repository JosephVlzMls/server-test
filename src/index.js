const http = require('http')

const PORT = 8080

const server = http.createServer((request, response) => {
    // https://freeipapi.com/api/json/{ip}
    const json = {
        httpVersion: request.httpVersion,
        method: request.method,
        url: request.url,
        request: {
            remoteAddress: request.socket.remoteAddress,
            address: request.socket.address(),
        },
        response: {
            remoteAddress: response.socket.remoteAddress,
            address: response.socket.address(),
        },
        headers: request.headers
    }
    // response.writeHead(301, {'Location': 'https://www.google.com'})
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.write(JSON.stringify(json))
    response.end()
})

server.listen(PORT)
console.log(`server on port ${PORT}`)