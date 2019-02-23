const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000;
var request = require("request");

app.use(cors())

app.get('/', (req, res) => {
    
    
    var options = { method: 'GET',
    url: 'https://samples.openweathermap.org/data/2.5/weather',
    qs: { q: 'London,uk', appid: 'b6907d289e10d714a6e88b30761fae22' },
    headers: 
    { 'Postman-Token': '1a6dd08f-2abc-49d1-b328-08b7044cac00',
    'cache-control': 'no-cache' } };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);

    res.send(body)
    });

   
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
