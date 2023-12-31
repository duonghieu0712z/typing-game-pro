const Emitter = require("EventEmitter");
const EventCode = require("EventCode");

cc.Class({
  extends: cc.Component,

  properties: {
    spine: sp.Skeleton,
    speed: 2,
    isAttack: false,
    punchSound: {
      type: cc.AudioClip,
      default: null,
    },
  },

  moving(target) {
    this.spine.setAnimation(0, "Walk", 1);
    const action = cc
      .spawn(
        cc.callFunc(() => this.moveAction(target)),
        cc.delayTime(1)
      )
      .repeatForever();
    this.node.runAction(action);
  },

  moveAction(target) {
    const direction = target.position.sub(this.node.position);
    const velocity = direction.normalize().mul(this.speed);
    this.increaseSpeed();

    const move = cc.sequence(
      cc.moveBy(1, velocity),
      cc.callFunc(() => {
        this.node.stopAction(move);
        const s = Math.abs(target.x - this.node.x);
        if (s <= 100 && !this.isAttack) {
          this.attack();
          this.node.stopAllActions();
        }
      })
    );

    this.node.runAction(move);
  },

  attack() {
    Emitter.instance.emit(EventCode.PLAY_SOUND, this.punchSound);
    this.spine.setAnimation(0, "Attack_1", 0);
    this.spine.setCompleteListener(() => {
      Emitter.instance.emit(EventCode.PLAYER_DIE);
    });
    this.isAttack = true;
  },

  increaseSpeed() {
    this.speed++;
  },
});
