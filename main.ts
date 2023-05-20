let soil_moisture = 0
basic.forever(function () {
    soil_moisture = smarthome.ReadSoilHumidity(AnalogPin.P1)
    if (soil_moisture <= 50) {
        basic.showNumber(soil_moisture)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(1000)
    } else {
        basic.showNumber(soil_moisture)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(1000)
    }
})
