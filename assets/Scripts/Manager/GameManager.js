// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const randomWords = require('random-words');
cc.Class({
    extends: cc.Component,

    properties: {
        textQuest:cc.Label,
        inputText:cc.EditBox,
    },
    start () {
        this.createWords();
    },
    createWords(){
        const words = randomWords(1).join('');
        this.textQuest.string = words;
    },
    onTextChange(){
        if(this.inputText.string[this.inputText.string.length - 1] == " "){
            this.createWords();
            this.inputText.string = '';
            this.inputText.blur();
            this.inputText.focus();
        }
    },
});