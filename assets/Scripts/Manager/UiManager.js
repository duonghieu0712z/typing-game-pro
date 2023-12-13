// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const Emitter = require("../Events/EventEmitter");
const EventCode = require("EventCode");

cc.Class({
    extends: cc.Component,

    properties: {
        userName:cc.Label,
        avatar:cc.Sprite,
        result:cc.Node,
        nameResult:cc.Label,
        scoreLabel:cc.Label,
        player:cc.Node,
    },
    onLoad(){
        Emitter.instance.registerEvent(EventCode.LOAD_INFO, data=>{
            this.userName.string = data.userName;
            this.avatar.spriteFrame = data.img;
        });
        Emitter.instance.registerOnce(EventCode.LOSE, this.showResult.bind(this))
    },

    showResult(){
        this.result.active = true;
        this.nameResult.string = this.userName.string;
        this.scoreLabel.string = `${this.player.x}m`
    }
});
