var raspi = require('raspi-io');
var five = require('johnny-five');
var board = new five.Board({
    io: new raspi()
});

five.Board().on("ready", function() {
    console.log('ready');
    var temperature = new five.Thermometer({
        controller: "TMP36",
        pin: "GPIO4"
    });

    temperature.on("data", function() {
        console.log(this.celsius + "°C", this.fahrenheit + "°F");
    });
});