cc.Class({
    extends: cc.Component,

    properties: {
        target: cc.Node,

        currentBackground: cc.Node,
        nextBackground: cc.Node,

        _widthBackground: 0,
    },

    onLoad() {
        const { width, scaleX } = this.currentBackground;
        this._widthBackground = width * scaleX;
    },

    update(dt) {
        if (this.target.x >= this.nextBackground.x) {
            this.currentBackground.x = this.nextBackground.x + this._widthBackground;
            this.switchBackground();
        }
    },

    switchBackground() {
        [this.currentBackground, this.nextBackground] = [this.nextBackground, this.currentBackground];
    },
});
