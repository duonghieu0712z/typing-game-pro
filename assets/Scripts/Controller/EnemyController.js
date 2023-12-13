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
    spine: sp.Skeleton,
    speed: 2,
    isAttack:false,
  },

  moving(target) {
    const s = Math.abs(target.x - this.node.x);
    cc.tween(this.node)
      .to(s/this.speed, { position: cc.v2(target.x, this.node.y) })
      .start();
      cc.log(s);
    if(s <= 100 && !this.isAttack){
      this.attack();
      this.isAttack = true;
    }
  },

  attack() {
    this.spine.setAnimation(0, "Attack_1", 0);
    this.spine.setCompleteListener(() => {
      Emitter.instance.emit(EventCode.PLAYER_DIE);
    });
  },
});
