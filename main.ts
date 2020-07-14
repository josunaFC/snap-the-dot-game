input.onButtonPressed(Button.A, function () {
    if (Sprite.get(LedSpriteProperty.X) == 2) {
        basic.showIcon(IconNames.Yes)
        game.addScore(1)
    } else {
        basic.showIcon(IconNames.No)
        game.addScore(-1)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(game.score())
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(2, 2)
game.startCountdown(60000)
basic.forever(function () {
    Sprite.move(1)
    basic.pause(150)
    Sprite.ifOnEdgeBounce()
})
