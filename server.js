
const compression = require('compression');
const express     = require('express');
const app         = express();

app.use(compression());

app.use( (req, res) => {

    let ipAddress;
    let language;
    let userAgent;

    if (req.url === '/favicon.ico') {
        return;
    }

    ipAddress = req.ip;
    language = req.get('Accept-Language');
    userAgent = req.get('User-Agent');

    parsedJSON = {
        ip_address: ipAddress,
        language: language,
        user_agent: userAgent
    };

    return res.json(parsedJSON);
});

var server = app.listen(process.env.PORT || 4000, () => {
    console.log('Express app listening!');
});

module.exports = server;