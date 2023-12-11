const randomWords = require("random-words");

const Emitter = require("EventEmitter");
const EventCode = require("EventCode");

cc.Class({
    extends: cc.Component,

    properties: {
        _word: "",
        _indexWord: 0,
    },

    editor: {
        executionOrder: 1,
    },

    start() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.inputWord, this);
        this.generateWord();
    },

    inputWord(ev) {
        if (this._indexWord === this._word.length && ev.keyCode === cc.macro.KEY.space) {
            this.generateWord();
        }

        const char = this._word.toUpperCase()[this._indexWord];
        if (char.charCodeAt(0) === ev.keyCode) {
            this._indexWord++;
            this.changeLabel();
        }
    },

    generateWord() {
        this._word = randomWords();
        this._indexWord = 0;

        this.changeLabel();
    },

    changeLabel() {
        Emitter.instance.emit(EventCode.CHANGE_LABEL, this._word, this._indexWord);
    },
});
