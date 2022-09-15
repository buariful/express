const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('server is running smoothly')
})

app.get('/abc', (req, res) => {
    res.send('abc')
})
app.get('/5', (req, res) => {
    res.send('5')
})
app.get('/e', (req, res) => {
    res.send('e')
})

app.listen(port, () => {
    console.log(`app running ${port}`)
})