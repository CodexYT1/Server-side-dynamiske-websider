const express = require('express');
const app = express();

app.get ('/', (req, res) => {
    res.send('Hello World! klokken er ' + new Date().toLocaleTimeString());
});

app.get('/her', (req, res) => {
    res.send(`
        <h1>Her er en overskrift</h1>
        <ul>
            <li>Jonas</li>
            <li>Benjamin</li>
            <li>Herman<li>
        <ul>
    `);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});