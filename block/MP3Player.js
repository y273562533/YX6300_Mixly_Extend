'use strict';

goog.provide('Blockly.Blocks.MP3Player');

goog.require('Blockly.Blocks');


var colorSet='#27b6ac';
var mp3_Control =[
                 ["播放", "mp3.play();"],
                 ["暂停", "mp3.pause();"],
                 ["停止", "mp3.stop();"],
                 ["下一首", "mp3.playNext();"],
                 ["上一首", "mp3.playPrevious();"],
                 ["音量增", "mp3.volUp();"],
                 ["音量减", "mp3.volDown();"],
              ];

Blockly.Blocks.mp3_begin={
init:function(){
    var PLAY_MODE =[["顺序播放", "mp3.play();"], 
                      ["随机播放", "mp3.playRAN();"], 
                      ["单曲循环", "mp3.playPL();"]
                      ];
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendField("播放模式");
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(PLAY_MODE),"PLAY_MODE");
    this.appendValueInput("Vol", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("音量设置");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  this.setInputsInline(true);
  }
};

Blockly.Blocks.mp3_Setup = {
  init: function() {
   this.setColour(colorSet);
   this.appendValueInput("RX", Number)
       .appendField("MP3管脚设置")
	     .appendField("RX#")
       .setCheck(Number)
	     .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("TX", Number)
	   .appendField("TX#")
     .setCheck(Number)
	   .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  }
};
Blockly.Blocks.mp3_control = {
  init: function() {
   this.setColour(colorSet);
   this.appendDummyInput("")
        .appendField("MP3播放控制");
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(mp3_Control),"mp3_Control");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  this.setInputsInline(true);
  }
};

Blockly.Blocks.mp3_control2 = {
  init: function() {
   this.setColour(colorSet);
   this.appendDummyInput("")
        .appendField("播放mp3文件序号");
    this.appendValueInput("file", Number)
         .setCheck(Number)
         .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  this.setInputsInline(true);
  }
};

Blockly.Blocks.mp3_PalyByName = {
  init: function() {
   this.setColour(colorSet);
   this.appendValueInput('FolderName')
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
       .appendField("播放文件夹");
   this.appendValueInput('SongName')
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
       .appendField("文件名");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  this.setInputsInline(true);
  }
};