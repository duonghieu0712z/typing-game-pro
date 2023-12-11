const Emitter = require("EventEmitter");
const EventCode = require("EventCode");

cc.Class({
    extends: cc.Component,

    properties: {
        label: cc.RichText,
        correctColor: cc.Color.GREEN,
    },

    editor: {
        executionOrder: 1,
    },

    onLoad() {
        Emitter.instance.registerEvent(EventCode.CHANGE_LABEL, this.onInput.bind(this));
    },

    onInput(word, index) {
        const correctColorStr = this.correctColor.toCSS("#rrggbb");
        const correctWord = word.substring(0, index);
        const restWord = word.substring(index);
        this.label.string = `<b><size=48><color=${correctColorStr}>${correctWord}</color></size></b>${restWord}`;
    },
});
