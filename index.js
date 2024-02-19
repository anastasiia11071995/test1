const http = require('http')
const os = require('os')
const fs = require('fs')
const headFile = fs.readFileSync('./.git/HEAD', 'utf-8')
const headRef = headFile.split(': ')[1]?.trim()
const PORT = process.env.PORT ?? 80





if (headRef)
    head = fs.readFileSync('./.git/' + headRef, 'utf-8')
else head = headFile

http.createServer((req, res) => {
    res.end(os.hostname + ' ' + head)
}).listen(PORT, ()=> {
    console.log('Listening on port ', PORT)
})
