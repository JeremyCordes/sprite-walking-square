def on_button_pressed_a():
    for index in range(4):
        Sprite.move(4)
        Sprite.turn(Direction.RIGHT, 90)
        basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    while not (input.button_is_pressed(Button.A)):
        music.play_tone(262, music.beat(BeatFraction.HALF))
        music.play_tone(523, music.beat(BeatFraction.HALF))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

Sprite: game.LedSprite = None
Sprite = game.create_sprite(2, 2)

def on_forever():
    for Yval in range(5):
        for Xval in range(5):
            led.plot(Xval, Yval)
            basic.pause(100)
            led.plot(Xval, Yval)
            basic.pause(100)
basic.forever(on_forever)
