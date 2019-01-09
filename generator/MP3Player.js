'use strict';

goog.provide('Blockly.Arduino.MP3Player');

goog.require('Blockly.Arduino');

Blockly.Arduino.mp3_begin = function () {
    var PLAY_MODE = this.getFieldValue('PLAY_MODE');
    var setvol = Blockly.Arduino.valueToCode(this, 'Vol', Blockly.Arduino.ORDER_ATOMIC);
    //Blockly.Arduino.setups_['mp3_begin'] =''+PLAY_MODE+'\n  mp3.setVol('+setvol+');'
    var code=''+PLAY_MODE+'\nmp3.setVol('+setvol+');';
    return code;
    };
Blockly.Arduino.mp3_Setup = function () {
    var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'TX', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'RX', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['define_MP3Serial'] = '#include "SerialMP3Player.h"';
    Blockly.Arduino.definitions_['define_PIN'] = '#define TX '+ dropdown_pin1 + '\n#define RX ' + dropdown_pin2 + '';
    Blockly.Arduino.definitions_['define_SerialMP3Player'] = 'SerialMP3Player mp3(RX,TX);';
    Blockly.Arduino.setups_['setup_MP3Player'] ='Serial.begin(9600);\n'
  +'  mp3.begin(9600);\n'        
  +'  delay(500);\n'             
  +'  mp3.sendCommand(CMD_SEL_DEV, 0, 2);\n'   
  +'  delay(500);';
    var code='';
    return code;
    };

Blockly.Arduino.mp3_control = function () {
    var code = this.getFieldValue('mp3_Control');
    return code;
    };
Blockly.Arduino.mp3_control2 = function () {
    var file = Blockly.Arduino.valueToCode(this, 'file', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'mp3.play('+file+');\n'
    return code;
    };
Blockly.Arduino.mp3_PalyByName = function () {
    var FolderName = Blockly.Arduino.valueToCode(this, 'FolderName', Blockly.Arduino.ORDER_ATOMIC);
    var SongName = Blockly.Arduino.valueToCode(this, 'SongName', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'mp3.playPF('+FolderName+','+SongName+');\n'
    return code;
    };




