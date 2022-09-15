const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('server is running smoothly')
})

app.listen(port, () => {
    console.log(`app running ${port}`)
})