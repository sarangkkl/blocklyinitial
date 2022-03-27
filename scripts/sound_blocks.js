Blockly.defineBlocksWithJsonArray([
    {
      "type": "play_sound",
      "message0": "Play %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
            ["C4", "sounds/c4.m4a"],
            ["D4", "sounds/d4.m4a"],
            ["E4", "sounds/e4.m4a"],
            ["F4", "sounds/f4.m4a"],
            ["G4", "sounds/g4.m4a"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 355
    },
    {
        "type": "move_forward",
        "message0": "➜",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "move_backward",
        "message0": "Move Backward",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "turn_right",
        "message0": "Turn Right",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "move_left",
        "message0": "Move Left",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "move_right",
        "message0": "Move Right",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      
  ]);

  Blockly.JavaScript['play_sound'] = function(block) {
    let value = '\'' + block.getFieldValue('VALUE') + '\'';
    console.log("The value is ",value)
    return 'MusicMaker.queueSound(' + value + ');\n';
  };

  Blockly.JavaScript['move_forward'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  Blockly.JavaScript['move_backward'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.JavaScript['move_left'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  Blockly.JavaScript['move_right'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };