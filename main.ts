input.onPinPressed(TouchPin.P0, function () {
    servos.P1.setAngle(90)
    basic.pause(5000)
    servos.P1.setAngle(150)
})
