const Emitter = require('EventEmitter')
const EventCode = require('EventCode');
cc.Class({
    extends: cc.Component,

    properties: {
        mAudioSource: {
            type: cc.AudioSource,
            default: null
        },
    },

    onLoad () {
        Emitter.instance.registerEvent(EventCode.PLAY_SOUND, this.playEfx.bind(this));
    },  
    playEfx(clip){
        cc.log(clip)
        this.mAudioSource.clip = clip;
        this.mAudioSource.play();
    }
});
