// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const Emitter = require("EventEmitter");
const EventCode = require("EventCode");

cc.Class({
    extends: cc.Component,

    properties: {
        inputText: cc.EditBox,
        avatar: cc.Sprite,
    },

    onLoad() {
        Emitter.instance.registerEvent(EventCode.CHOOSE_AVATAR, (img) => {
            this.avatar.spriteFrame = img;
        });
    },

    ChangeScene() {
        const info = {
            userName: this.inputText.string,
            img: this.avatar.spriteFrame,
        };

        cc.director.loadScene("Main", (err, data) => {
            Emitter.instance.emit(EventCode.LOAD_INFO, info);
        });
    },
});
