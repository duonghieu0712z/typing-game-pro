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
cc.Class({
  extends: cc.Component,

  properties: {},

  onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent("hello", this.onHello.bind(this));
    Emitter.instance.registerOnce("welcome", this.onWelcome.bind(this));
    Emitter.instance.registerEvent('target-Moving', this.targetMove.bind(this))
    Emitter.instance.registerEvent('target-Die', this.targetDie.bind(this))
  },

  targetDie(){

  },

  targetMove(tar){
    tar.node.x+=2;
  },

  onHello(msg) {
    cc.log(`hello ${msg}`);
  },

  onWelcome(msg) {
    cc.log(`welcome ${msg}`);
  },
});
