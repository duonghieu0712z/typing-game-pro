// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    spine: sp.Skeleton,
    target: cc.Node,
  },

  start() {
    cc.tween(this.node)
      .to(10, { position: cc.v2(this.target.x - 100, this.node.y) })
      .call(() => {
        this.attack();
      })
      .start();
  },

  attack(){
    this.spine.setAnimation(0, "Attack_1", 0);
  }
});
