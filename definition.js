Blockly.Blocks['yolobit_ds18b20_setup'] = {
    init: function() {
      this.jsonInit(
        {
          "type": "yolobit_db18s20_setup",
          "message0": "khởi tạo cảm biến nhiệt độ DS18B20 chân %1",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "pin",
              "options": [
                [
                  "P0",
                  "pin0"
                ],
                [
                  "P1",
                  "pin1"
                ],
                [
                  "P2",
                  "pin2"
                ],
                [
                  "P3",
                  "pin3"
                ],
                [
                  "P4",
                  "pin4"
                ],
                [
                  "P5",
                  "pin5"
                ],
                [
                  "P6",
                  "pin6"
                ],
                [
                  "P7",
                  "pin7"
                ],
                [
                  "P8",
                  "pin8"
                ],
                [
                  "P9",
                  "pin9"
                ],
                [
                  "P10",
                  "pin10"
                ],
                [
                  "P11",
                  "pin11"
                ],
                [
                  "P12",
                  "pin12"
                ],
                [
                  "P13",
                  "pin13"
                ],
                [
                  "P14",
                  "pin14"
                ],
                [
                  "P15",
                  "pin15"
                ],
                [
                  "P16",
                  "pin16"
                ]
              ]
            }
          ],
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#cdbf88",
          "tooltip": "",
          "helpUrl": ""
        }
      );
    }
  };

  Blockly.Python['yolobit_ds18b20_setup'] = function(block) {
    Blockly.Python.definitions_['import_display'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_onewire'] = 'import onewire';
    Blockly.Python.definitions_['import_ds18x20'] = 'import ds18x20';
    var dropdown_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    var code = 'ds_sensor = ds18x20.DS18X20(onewire.OneWire(machine.Pin(' + dropdown_pin + '.pin)))\n' + 'roms = ds_sensor.scan()\n';
    return code;
  };
  

  Blockly.Blocks['yolobit_ds18b20_read_temp'] = {
    init: function() {
      this.jsonInit({      
        "type": "yolobit_ds18b20_read_temp",
        "message0": "giá trị %1",
        "args0": [
            {
              type: "field_dropdown",
              name: "value",
              "options": [
                [
                  "℃",
                  "Cencius"
                ],
                [
                  "°F",
                  "Fahrenheit"
                ]
            ]
        }],
        "output": null,
        "colour": "#cdbf88",
        "tooltip": "",
        "helpUrl": ""     
      });
    }
  };

  Blockly.Python['yolobit_ds18b20_read_temp'] = function(block) {
    var value = block.getFieldValue('value');
    var code = '';
    if (value == "℃") 
        code = 'temp';
    else
        code = '(temp * 1.8) +32';
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Blocks['yolobit_ds18b20_update_temp'] = {
    init: function() {
      this.jsonInit({      
        "type": "yolobit_ds18b20_read_temp",
        "message0": "cập nhật giá trị cảm biến",
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#cdbf88",
        "tooltip": "",
        "helpUrl": ""    
      });
    }
  };

  Blockly.Python['yolobit_ds18b20_update_temp'] = function(block) {
    var code = 'ds_sensor.convert_temp()\n' + 'time.sleep_ms(750)\n' + 'for rom in roms:\n' + '\ttemp = ds_sensor.read_temp(rom)\n';
    return code;
  };