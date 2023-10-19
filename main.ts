let xpoz = 0
let ypoz = 0
let sor = 0
let oszlop = 0
input.onGesture(Gesture.LogoDown, function () {
    if (!(led.point(xpoz, ypoz - 1)) && ypoz >= 1) {
        led.unplot(xpoz, ypoz)
        ypoz = ypoz - 1
    }
    led.plot(xpoz, ypoz)
    ellenorzes()
})
input.onGesture(Gesture.LogoUp, function () {
    if (!(led.point(xpoz, ypoz + 1)) && ypoz <= 3) {
        led.unplot(xpoz, ypoz)
        ypoz = ypoz + 1
    }
    led.plot(xpoz, ypoz)
    ellenorzes()
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index < 6; index++) {
        sor = randint(0, 4)
        oszlop = randint(0, 3) + 1
        while (led.point(oszlop, sor)) {
            sor = randint(0, 4)
            oszlop = randint(0, 3) + 1
        }
        led.plot(oszlop, sor)
    }
    xpoz = 0
    ypoz = 2
    led.plot(xpoz, ypoz)
})
function ellenorzes () {
    if (xpoz == 4 && ypoz == 4) {
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
    }
}
input.onGesture(Gesture.TiltRight, function () {
    if (!(led.point(xpoz + 1, ypoz)) && xpoz <= 3) {
        led.unplot(xpoz, ypoz)
        xpoz = xpoz + 1
    }
    led.plot(xpoz, ypoz)
    ellenorzes()
})
input.onGesture(Gesture.TiltLeft, function () {
    if (!(led.point(xpoz - 1, ypoz)) && xpoz >= 1) {
        led.unplot(xpoz, ypoz)
        xpoz = xpoz - 1
    }
    led.plot(xpoz, ypoz)
    ellenorzes()
})
