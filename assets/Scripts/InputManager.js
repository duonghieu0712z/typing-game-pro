const randomWords = require("random-words");

const Emitter = require("EventEmitter");

cc.Class({
    extends: cc.Component,

    properties: {
        _words: [],
    },

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.inputWord, this);
        this._words = randomWords(2);
        cc.log(this._words);
    },

    onInputWord(callback) {},

    inputWord(ev) {
        cc.log(this._words);
        if (ev.keyCode === cc.macro.KEY.space) {
            this._words.shift();
            this._words.push(randomWords());
            return;
        }

        const word = this._words[0].toUpperCase();
    },
});
