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
  properties: {
    spine: sp.Skeleton,
    checkRun: false,
  },

  start() {
    this.spine.setAnimation(0, "portal", 0);
    this.spine.addAnimation(0, "idle", 1);
  },
  moving() {
    if(!this.checkRun){
      this.spine.setAnimation(0, "hoverboard", 1);
      this.checkRun = true;
    }
    this.node.x += 15;
  },
  die() {
    this.spine.setAnimation(0, "die", 0);
  },
});
