cc.Class({
    extends: cc.Component,
  
    properties: {
      mItem: cc.Prefab,
      avatarAtlas: cc.SpriteAtlas,
    },
  
    start() {
      const avtArr = this.avatarAtlas.getSpriteFrames();
      for (let i = 0; i < avtArr.length; i++) {
        const avatar = cc.instantiate(this.mItem);
        const updateAvatarComponent = avatar.getComponent("UpdateAvatar");
        updateAvatarComponent.setAvatar(avtArr[i]);
        avatar.parent = this.node;
      }
    },
  });
  