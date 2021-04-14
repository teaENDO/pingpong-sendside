radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showString("HiHi")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
radio.setGroup(1)
