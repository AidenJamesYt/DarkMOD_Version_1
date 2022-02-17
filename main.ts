let toggle = true
let purpleSquare = image.create(32, 32)
purpleSquare.fill(11)
let showSquare = sprites.create(purpleSquare, 0)
game.onUpdateInterval(1000, function () {
    if (toggle) {
        scene.setBackgroundColor(15)
    } else {
        scene.setBackgroundColor(15)
    }
    toggle = !(toggle)
})
