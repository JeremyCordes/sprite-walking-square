input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        Sprite.move(4)
        Sprite.turn(Direction.Right, 90)
        basic.pause(100)
    }
})
input.onGesture(Gesture.Shake, function () {
    while (!(input.buttonIsPressed(Button.A))) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(2, 2)
basic.forever(function () {
    for (let Yval = 0; Yval <= 4; Yval++) {
        for (let Xval = 0; Xval <= 4; Xval++) {
            led.plot(Xval, Yval)
            basic.pause(100)
            led.plot(Xval, Yval)
            basic.pause(100)
        }
    }
})
