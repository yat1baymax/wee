input.onButtonPressed(Button.A, function () {
    Monkey.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Monkey.change(LedSpriteProperty.X, 1)
})
let Monkey: game.LedSprite = null
game.setScore(0)
Monkey = game.createSprite(2, 4)
let Banana = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    basic.pause(550)
    Banana.change(LedSpriteProperty.Y, 1)
})
basic.forever(function () {
    if (Banana) {
        if (Banana.isTouching(Monkey)) {
            game.addScore(1)
            Banana.delete()
            Banana = game.createSprite(randint(0, 4), 0)
        }
    }
})
basic.forever(function () {
    if (Banana) {
        if (Banana.get(LedSpriteProperty.X) == 4) {
            game.gameOver()
        }
    }
})
