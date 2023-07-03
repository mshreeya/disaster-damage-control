var fs = require('fs');
request = require('request');

var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

let xco = 19.7956871;
let yco = 85.8121777;

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        x = xco + i * 0.0017;
        y = yco + j * 0.0017;
        let durl = `https://maps.googleapis.com/maps/api/staticmap?center=${x},${y}&zoom=19&maptype=satellite&size=640x640&key=AIzaSyAcAIpEFWAMwPUMSv8xgQvj2l8ObqKIcFY`;
        let dfname = `./training_images/${i}-${j}.png`
        download(durl, dfname, function () {
            console.log(`${dfname} downloaded!`);
        });
    }
}