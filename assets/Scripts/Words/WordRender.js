const Emitter = require("EventEmitter");
const EventCode = require("EventCode");

cc.Class({
    extends: cc.Component,

    properties: {
        words: cc.RichText,
        nextWords: cc.Label,
        correctColor: cc.Color.GREEN,
    },

    onLoad() {
        Emitter.instance.registerEvent(EventCode.RENDER_WORDS, this.renderWords.bind(this));
        Emitter.instance.registerEvent(EventCode.RENDER_NEXT_WORDS, this.renderNextWords.bind(this));
    },

    renderWords(words, index) {
        const correctColor = this.correctColor.toCSS("#rrggbb");
        const correctSize = this.words.fontSize + 1;

        const correctWord = words.substring(0, index);
        const currentChar = index === words.length ? "" : words[index];
        const restWord = words.substring(index + 1);

        this.words.string =
            `<b><size=${correctSize}><color=${correctColor}>${correctWord}</color></size></b>` +
            `<u>${currentChar}</u>` +
            `${restWord}`;
    },

    renderNextWords(words) {
        this.nextWords.string = words;
    },
});
