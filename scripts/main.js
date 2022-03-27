function moveForward(){
    console.log("Got hit")
    var x = document.getElementById("player");
    var old_margin = x.style.marginLeft;
    console.log("The margin is",old_margin)
    x.style.marginLeft=old_margin+"2px";
    console.log("The margin now is ",x.style.marginLeft)
}

Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    scrollbars: false
  });