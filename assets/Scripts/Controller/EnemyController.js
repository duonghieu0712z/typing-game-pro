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
    speed: 100,
  },

  start() {},

  moving(target) {
    cc.tween(this.node)
      .to(5, { position: cc.v2(target.x - 100, this.node.y) })
      .start();

      if (this.node.position.sub(target.position).mag() <= 100) {
        this.attack();
      }
  },

  attack() {
    this.spine.setAnimation(0, "Attack_1", 0);
    this.spine.setCompleteListener(() => {
      cc.log("player die");
    });
  },

  onCollisionEnter(collider){
    cc.log(collider);
  }
});
