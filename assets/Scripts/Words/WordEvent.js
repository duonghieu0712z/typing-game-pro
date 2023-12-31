const randomWords = require("random-words");

const Emitter = require("EventEmitter");
const EventCode = require("EventCode");

cc.Class({
    extends: cc.Component,

    properties: {
        numberWords: 1,
        hasSpaceEnd: true,

        _words: "",
        _nextWords: "",
        _indexWord: 0,

    },

    onLoad() {
        Emitter.instance.registerEvent(EventCode.TYPE_WORD, this.onTyping.bind(this));
    },

    start() {
        this.generateNextWords();
        this.nextWords();
        this.generateNextWords();
    },

    onTyping(ev) {
        const char = this._words.toUpperCase()[this._indexWord];
        if (char.charCodeAt(0) === ev.keyCode) {
            this._indexWord++;
            Emitter.instance.emit(EventCode.RENDER_WORDS, this._words, this._indexWord);
            Emitter.instance.emit(EventCode.PLAYER_MOVING);
            Emitter.instance.emit(EventCode.ENEMY_MOVING);
        }

        const isPressedSpace = !this.hasSpaceEnd || ev.keyCode === cc.macro.KEY.space;
        if (this._indexWord === this._words.length && isPressedSpace) {
            this.nextWords();
            this.generateNextWords();
        }
    },

    generateNextWords() {
        this._nextWords = randomWords({ exactly: this.numberWords, join: " " });
        if (this.hasSpaceEnd) {
            this._nextWords += " ";
        }

        Emitter.instance.emit(EventCode.RENDER_NEXT_WORDS, this._nextWords);
    },

    nextWords() {
        this._words = this._nextWords;
        this._indexWord = 0;

        Emitter.instance.emit(EventCode.RENDER_WORDS, this._words, this._indexWord);
    },
});
