const express = require('express');
const { rmSync } = require('fs');
const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('Congratulations! We are running node HTTP server!');
});

app.get('/colors', (req, res, next) => {
    let colors = ["blue","yellow", "red"];
    res.setHeader("content-type","application/json");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.status(200).send(JSON.stringify(colors));
  });

let port = 8081;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})