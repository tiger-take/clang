input.onButtonPressed(Button.A, function () {
    reset()
    helloworld.showAsyncString("Happy birthday!")
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    reset()
    basic.showString("Hello!")
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
})
function reset () {
    helloworld.stopAnimation()
    basic.clearScreen()
    music.stopAllSounds()
    basic.pause(100)
}
basic.showIcon(IconNames.Heart)
