#include "pxt.h"

namespace helloworld {
    
    //%
    void showAsyncString(String text) {
        uBit.display.scrollAsync(MSTR(text));
    }

    //%
    void stopAnimation() {
        uBit.display.stopAnimation();
    }
}
