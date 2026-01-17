let wasser = game.createSprite(2, 0)
basic.forever(function () {
    if (wasser.get(LedSpriteProperty.Y) < 4) {
        wasser.change(LedSpriteProperty.Y, 1)
    } else {
        wasser.set(LedSpriteProperty.Y, 0)
        wasser.set(LedSpriteProperty.X, randint(0, 4))
    }
    basic.pause(200)
})
