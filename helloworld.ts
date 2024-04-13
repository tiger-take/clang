// ここにコードを追加します
/**
 * Hello World blocks
 * icon: a Unicode identifier for an icon from the Font Awesome icon set.
 *       http://fontawesome.io/icons
 */
//% weight=100 color=#696969 icon="\uf1b2"
namespace helloworld {

    /**
     * Show string, async
     * @param text 非同期でスクロール表示する文字列
     */
    //% block
    //% shim=helloworld::showAsyncString
    export function showAsyncString(text: string): void {
        // for the simulator
        basic.showString(text)
    }

    /**
     * Stop animation
     */
    //% block
    //% shim=helloworld::stopAnimation
    export function stopAnimation(): void {
        // for the simulator
        basic.clearScreen()
    }
}
