const Emitter = require("EventEmitter");
const EventCode = require("EventCode");

cc.Class({
  extends: cc.Component,

  properties: {
    player: cc.Node,
    enemy: cc.Node,
    mAudio: {
      default: null,
      type: cc.AudioClip
  }
  },

  start(){
    Emitter.instance.emit(EventCode.PLAY_SOUND, this.mAudio);
  },
  onLoad() {
    Emitter.instance.registerEvent(
      EventCode.PLAYER_MOVING,
      this.playerMove.bind(this)
    );
    Emitter.instance.registerOnce(
      EventCode.ENEMY_MOVING,
      this.EnemyMove.bind(this)
    );
  },
  playerMove() {
    this.player.getComponent('PlayerController').moving();
    this.EnemyMove();
  },
  EnemyMove() {
    this.enemy.getComponent('EnemyController').moving(this.player);
  },
});
