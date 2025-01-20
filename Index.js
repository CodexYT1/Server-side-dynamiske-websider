const express = require('express');
const app = express();

app.get ('/', (req, res) => {
    res.send('Hello World! klokken er ' + new TimeRanges().toLocaleTimeString());
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});