const express = require('express')
const app = express()
const port = process.env.PORT || 3010

app.listen(port, () => {
    console.log('Server start' + port)
})
app.use(function (req, res, next) {

    const corsWhitelist = [
        'http://localhost:3000',
        /*'https://natali09yarmolik.github.io',*/
        /*'http://localhost:3010/src/items'*/

    ];
    if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    }
    next();
});

const items = require('./items.json')
console.log(items)
app.get('./items.json', (req, res) => {
    res.json({data: items})
})