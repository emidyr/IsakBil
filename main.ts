radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        fremover()
    } else if (receivedNumber == 2) {
        bakover()
    } else if (receivedNumber == 3) {
        høyre()
    } else if (receivedNumber == 4) {
        venstre()
    } else if (receivedNumber == 5) {
        stopp()
    }
})
function bakover () {
    pins.servoWritePin(AnalogPin.P0, 0)
    pins.servoWritePin(AnalogPin.P1, 180)
}
function venstre () {
    pins.servoWritePin(AnalogPin.P0, 180)
    pins.servoWritePin(AnalogPin.P1, 90)
}
function firkant () {
    for (let index = 0; index < 4; index++) {
        fremover()
        basic.pause(1000)
        høyre()
        basic.pause(400)
    }
    stopp()
}
function stopp () {
    pins.servoWritePin(AnalogPin.P0, 90)
    pins.servoWritePin(AnalogPin.P1, 90)
}
function høyre () {
    pins.servoWritePin(AnalogPin.P0, 90)
    pins.servoWritePin(AnalogPin.P1, 0)
}
function fremover () {
    pins.servoWritePin(AnalogPin.P0, 180)
    pins.servoWritePin(AnalogPin.P1, 0)
}
radio.setGroup(495)
basic.forever(function () {
	
})
