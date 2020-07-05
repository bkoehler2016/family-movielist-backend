const server = require('./server.js');

const PORT = 9000;

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}...`)
})