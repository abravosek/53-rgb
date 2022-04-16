let strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.rgb(0, 0, 255))
    strip.show()
    basic.pause(1000)
})
