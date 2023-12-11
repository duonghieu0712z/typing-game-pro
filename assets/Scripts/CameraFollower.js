cc.Class({
    extends: cc.Component,

    properties: {
        target: cc.Node,

        _prevTargetPos: cc.Vec2,
    },

    onLoad() {
        this._prevTargetPos = this.target.position;
    },

    lateUpdate(dt) {
        const offset = this.target.position.sub(this._prevTargetPos);
        this.node.position = this.node.position.add(offset);
        this._prevTargetPos = this.target.position;
    },
});
