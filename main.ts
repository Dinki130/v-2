input.onGesture(Gesture.Shake, function () {
    broj_koraka += 1
})
let broj_koraka = 0
basic.forever(function () {
    basic.showNumber(broj_koraka)
    basic.pause(800)
})
