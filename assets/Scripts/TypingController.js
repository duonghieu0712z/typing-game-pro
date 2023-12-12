const Emitter = require("EventEmitter");
const EventCode = require("EventCode");

cc.Class({
    extends: cc.Component,

    properties: {
        _word: "",
        _indexWord: 0,
    },

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.typeWord, this);
    },

    typeWord(ev) {
        Emitter.instance.emit(EventCode.TYPE_WORD, ev)
    },
});
