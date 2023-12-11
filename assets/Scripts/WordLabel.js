const Emitter = require("EventEmitter");
const EventCode = require("EventCode");

cc.Class({
    extends: cc.Component,

    properties: {
        label: cc.RichText,
        correctColor: cc.Color.GREEN,
        correctSize: 48,
    },

    editor: {
        executionOrder: 1,
    },

    onLoad() {
        Emitter.instance.registerEvent(EventCode.CHANGE_LABEL, this.onTyping.bind(this));
    },

    onTyping(word, index) {
        const correctColor = this.correctColor.toCSS("#rrggbb");
        const correctWord = word.substring(0, index);
        const restWord = word.substring(index);

        this.label.string = `<b><size=${this.correctSize}><color=${correctColor}>${correctWord}</color></size></b>${restWord}`;
    },
});
