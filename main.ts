input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendString("RAUCH!")
    music.setBuiltInSpeakerEnabled(true)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
    music.setBuiltInSpeakerEnabled(false)
    radio.sendString("STOP!")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "RAUCH!") {
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
        music.setVolume(255)
        music.setBuiltInSpeakerEnabled(true)
    }
    if (receivedString == "STOP!") {
        music.setVolume(0)
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
        music.setBuiltInSpeakerEnabled(false)
    }
    if (receivedString == "FEHLER!") {
        music.setBuiltInSpeakerEnabled(false)
        basic.setLedColors(0x00ff00, 0xff0000, 0x00ff00)
        basic.showString(receivedString)
    }
})
radio.setGroup(5)
music.setVolume(0)
music.setBuiltInSpeakerEnabled(false)
basic.forever(function () {
    music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 150)
})
