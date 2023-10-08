const express = require('express')
const app = express()
const path = require('path');


const port = 3000
// express.static() middleware function is used to serve all files in the textures directory.
app.use(express.static('textures'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
