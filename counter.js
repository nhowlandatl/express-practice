const express = require('express');
const app2 = express();
const port = 3000;

var counter = 0;

app2.get('/value', function(req, res) {
    res.json(counter);
});

app2.post('/increment', function(req, res) {
    counter++;
    res.json(counter);
});

// use res.json, post only takes string/buffer/array

app2.listen(port, () => console.log(`app listening at http://localhost:${port}`));


