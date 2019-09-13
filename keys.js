import { Point, calculateRotationMatrix, applyMatrixToPoint } from './point';
import { rgb, HSVtoRGB, HSVtoRGB2, nameToHex, hex2rgb, rgb2hsv, getContrastYIQ, rgbToHex } from './color_utils';

class Keys {
  constructor(canvas, settings, synth) {
    this.settings = {
      hexHeight: settings.hexSize * 2,
      hexVert: settings.hexSize * 3 / 2,
      hexWidth: Math.sqrt(3) * settings.hexSize,
      ...settings,
    };

    this.synth = synth;
    this.state = {
      canvas,
      context: canvas.getContext('2d'),
      global_pressed_interval: null,
      current_text_color: "#000000",
      sustain: false,
      sustainedNotes: [],
      pressedKeys: [],
      activeHexObjects: [],
      isTouchDown: false,
      isMouseDown: false,
      shake: {
        lastShakeCheck: 0,
        lastShakeCount: 0,
        // Shake sensitivity (a lower number is more)
        sensitivity: 5,
        // Position variables
        x1: 0,
        y1: 0,
        z1: 0,
        x2: 0,
        y2: 0,
        z2: 0,
      }
    };
    // Set up resize handler
    window.addEventListener('resize', this.resizeHandler, false);
    window.addEventListener('orientationchange', this.resizeHandler, false);

    //... and give it an initial call, which does the initial draw
    this.resizeHandler();

    // Set up keyboard, touch and mouse event handlers
    //this.state.canvas.addEventListener("keydown", this.onKeyDown, false); // Firefox isn't firing :(
    //this.state.canvas.addEventListener("keyup", this.onKeyUp, false);

    window.addEventListener("keydown", this.onKeyDown, false);
    window.addEventListener("keyup", this.onKeyUp, false);
    this.state.canvas.addEventListener("touchstart", this.handleTouch, false);
    this.state.canvas.addEventListener("touchend", this.handleTouch, false);
    this.state.canvas.addEventListener("touchmove", this.handleTouch, false);
    this.state.canvas.addEventListener("mousedown", this.mouseDown, false);
    this.state.canvas.addEventListener("mouseup", this.mouseUp, false);
    // iPad Shake to toggle sustain
    if (typeof window.DeviceMotionEvent != 'undefined') {
      window.addEventListener('devicemotion', this.deviceMotion, false);
      // Periodically check the position and fire
      // if the change is greater than the sensitivity
      this.interval = setInterval(this.motionScan, 300);
    }
  }

  deconstruct = () => {
    for (let hex in this.state.activeHexObjects) {
      hex.noteOff();
    }
    for (let hex in this.sustainedNotes) {
      hex.noteOff();
    }

    window.removeEventListener('resize', this.resizeHandler, false);
    window.removeEventListener('orientationchange', this.resizeHandler, false);

    // Set up keyboard, touch and mouse event handlers
    //this.state.canvas.removeEventListener("keydown", this.onKeyDown, false); // Firefox isn't firing :(
    //this.state.canvas.removeEventListener("keyup", this.onKeyUp, false);
    window.removeEventListener("keydown", this.onKeyDown, false);
    window.removeEventListener("keyup", this.onKeyUp, false);
    this.state.canvas.removeEventListener("touchstart", this.handleTouch, false);
    this.state.canvas.removeEventListener("touchend", this.handleTouch, false);
    this.state.canvas.removeEventListener("touchmove", this.handleTouch, false);
    this.state.canvas.removeEventListener("mousedown", this.mouseDown, false);
    this.state.canvas.removeEventListener("mouseup", this.mouseUp, false);
    this.state.canvas.removeEventListener("mousemove", this.mouseActive, false);
    if (typeof window.DeviceMotionEvent != 'undefined') {
      window.removeEventListener('devicemotion', this.deviceMotion, false);
      clearInterval(this.interval);
    }
  }

  noteOff(hex) {
    if (this.state.sustain) {
      this.state.sustainedNotes.push(hex);
    } else {
      hex.noteOff();
    }
  }

  deviceMotion = () => {
    this.state.shake.x1 = e.accelerationIncludingGravity.x;
    this.state.shake.y1 = e.accelerationIncludingGravity.y;
    this.state.shake.z1 = e.accelerationIncludingGravity.z;
  }

  motionScan = () => {
    const { x1, x2, y1, y2, z1, z2, lastShakeCount, lastShakeCheck } = this.state.shake;
    var change = Math.abs(x1 - x2 + y1 - y2 + z1 - z2);

    if (change > this.state.sensitivity) {
      if (lastShakeCheck - lastShakeCount >= 3) {
        this.state.shake.lastShakeCount = this.state.shake.lastShakeCheck;
        if (this.state.sustain == true) {
          this.state.sustain = false;
          for (var note = 0; note < this.state.sustainedNotes.length; note++) {
            this.noteOff(this.state.sustainedNotes[note]);
          }
          this.state.sustainedNotes = [];
          tempAlert('Sustain Off', 900);
        } else {
          this.state.sustain = true;
          tempAlert('Sustain On', 900);
        }
      }
    }

    // Update new position
    this.state.shake.x2 = x1;
    this.state.shake.y2 = y1;
    this.state.shake.z2 = z1;
  }

  resizeHandler = () => {
    // Resize Inner and outer coordinates of canvas to preserve aspect ratio

    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;

    this.state.canvas.style.height = newHeight + 'px';
    this.state.canvas.style.width = newWidth + 'px';

    this.state.canvas.style.marginTop = (-newHeight / 2) + 'px';
    this.state.canvas.style.marginLeft = (-newWidth / 2) + 'px';

    this.state.canvas.width = newWidth;
    this.state.canvas.height = newHeight;

    // Find new centerpoint

    var centerX = newWidth / 2;
    var centerY = newHeight / 2;
    this.state.centerpoint = new Point(centerX, centerY);

    // Rotate about it

    if (this.state.rotationMatrix) {
      this.state.context.restore();
    }
    this.state.context.save();

    this.state.rotationMatrix = calculateRotationMatrix(-this.settings.rotation, this.state.centerpoint);

    var m = calculateRotationMatrix(this.settings.rotation, this.state.centerpoint);
    this.state.context.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);

    // Redraw Grid

    this.drawGrid();
  }

  onKeyDown = (e) => {
    if (e.keyCode == 32) { // Spacebar
      this.state.sustain = true;
    } else if (!this.state.isMouseDown && !this.state.isTouchDown
               && (e.keyCode in this.settings.keyCodeToCoords)
               && this.state.pressedKeys.indexOf(e.keyCode) == -1) {
      this.state.pressedKeys.push(e.keyCode);
      var coords = this.settings.keyCodeToCoords[e.keyCode];
      var hex = this.synth.makeHex(coords);
      this.state.activeHexObjects.push(hex);
      var cents = this.hexCoordsToCents(coords);
      this.drawHex(coords, this.centsToColor(cents, true));
      hex.noteOn(cents);
    }
  }

  onKeyUp = (e) => {
    if (e.keyCode == 32) { // Spacebar
      this.state.sustain = false;
      for (var note = 0; note < this.state.sustainedNotes.length; note++) {
        this.noteOff(this.state.sustainedNotes[note]);
      }
      this.state.sustainedNotes = [];
    } else if (!this.state.isMouseDown && !this.state.isTouchDown
               && (e.keyCode in this.settings.keyCodeToCoords)) {
      var keyIndex = this.state.pressedKeys.indexOf(e.keyCode);
      if (keyIndex != -1) {
        this.state.pressedKeys.splice(keyIndex, 1);
        var coords = this.settings.keyCodeToCoords[e.keyCode];
        this.drawHex(coords, this.centsToColor(this.hexCoordsToCents(coords), false));
        var hexIndex = this.state.activeHexObjects.findIndex(function(hex) {
          return coords.equals(hex.coords);
        });
        if (hexIndex != -1) {
          this.noteOff(this.state.activeHexObjects[hexIndex]);
          this.state.activeHexObjects.splice(hexIndex, 1);
        }
      }
    }
  }

  mouseUp = (e) => {
    this.state.isMouseDown = false;
    if (this.state.pressedKeys.length != 0 || this.state.isTouchDown) {
      return;
    }
    this.state.canvas.removeEventListener("mousemove", this.mouseActive);
    if (this.state.activeHexObjects.length > 0) {
      var coords = this.state.activeHexObjects[0].coords;
      this.noteOff(this.state.activeHexObjects[0]);
      this.drawHex(coords, this.centsToColor(this.hexCoordsToCents(coords), false));
      this.state.activeHexObjects.pop();
    }
  }

  mouseDown = (e) => {
    if (this.state.pressedKeys.length != 0 || this.state.isTouchDown) {
      return;
    }
    this.state.isMouseDown = true;
    this.state.canvas.addEventListener("mousemove", this.mouseActive, false);
    this.mouseActive(e);
  }

  mouseActive = (e) => {
    var coords = this.getPointerPosition(e);

    coords = this.getHexCoordsAt(coords);

    if (this.state.activeHexObjects.length == 0) {
      this.state.activeHexObjects[0] = this.synth.makeHex(coords);
      var cents = this.hexCoordsToCents(coords);
      this.state.activeHexObjects[0].noteOn(cents);
      this.drawHex(coords, this.centsToColor(cents, true));
    } else {
      if (!(coords.equals(this.state.activeHexObjects[0].coords))) {
        this.noteOff(this.state.activeHexObjects[0]);
        this.drawHex(this.state.activeHexObjects[0].coords,
                     this.centsToColor(this.hexCoordsToCents(this.state.activeHexObjects[0].coords, false)));

        this.state.activeHexObjects[0] = this.synth.makeHex(coords);
        var cents = this.hexCoordsToCents(coords);
        this.state.activeHexObjects[0].noteOn(cents);
        this.drawHex(coords, this.centsToColor(cents, true));
      }
    }
  }

  getPointerPosition(e) {
    var parentPosition = this.getPosition(e.currentTarget);
    var xPosition = e.clientX - parentPosition.x;
    var yPosition = e.clientY - parentPosition.y;
    return new Point(xPosition, yPosition);
  }

  getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
      xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
      element = element.offsetParent;
    }
    return {
      x: xPosition,
      y: yPosition
    };
  }

  handleTouch = (e) => {
    e.preventDefault();
    if (this.state.pressedKeys.length != 0 || this.state.isMouseDown) {
      this.state.isTouchDown = false;
      return;
    }
    this.state.isTouchDown = e.targetTouches.length != 0;

    for (var i = 0; i < this.state.activeHexObjects.length; i++) {
      this.state.activeHexObjects[i].release = true;
    }

    for (var i = 0; i < e.targetTouches.length; i++) {
      var coords = this.getHexCoordsAt(new Point(e.targetTouches[i].pageX - this.state.canvas.offsetLeft,
                                                 e.targetTouches[i].pageY - this.state.canvas.offsetTop));
      var found = false;

      for (var j = 0; j < this.state.activeHexObjects.length; j++) {
        if (coords.equals(this.state.activeHexObjects[j].coords)) {
          this.state.activeHexObjects[j].release = false;
          found = true;
        }
      }
      if (!(found)) {
        var newHex = this.synth.makeHex(coords);
        var cents = this.hexCoordsToCents(coords);
        newHex.noteOn(cents);
        var c = this.centsToColor(cents, true);
        this.drawHex(coords, c);
        this.state.activeHexObjects.push(newHex);
      }
    }

    for (var i = this.state.activeHexObjects.length - 1; i >= 0; i--) {
      if (this.state.activeHexObjects[i].release) {
        this.noteOff(this.state.activeHexObjects[i]);
        var coords = this.state.activeHexObjects[i].coords;
        var c = this.centsToColor(this.hexCoordsToCents(coords), false);
        this.drawHex(coords, c);
        this.state.activeHexObjects.splice(i, 1);
      }
    }
  }

  drawGrid() {
    var max = (this.state.centerpoint.x > this.state.centerpoint.y) ?
        this.state.centerpoint.x / this.settings.hexSize :
        this.state.centerpoint.y / this.settings.hexSize;
    max = Math.floor(max);
    for (var r = -max; r < max; r++) {
      for (var ur = -max; ur < max; ur++) {
        var coords = new Point(r, ur);
        var c = this.centsToColor(this.hexCoordsToCents(coords), false);
        this.drawHex(coords, c);
      }
    }
  }

  hexCoordsToScreen(hex) { /* Point */
    var screenX = this.state.centerpoint.x + hex.x * this.settings.hexWidth + hex.y * this.settings.hexWidth / 2;
    var screenY = this.state.centerpoint.y + hex.y * this.settings.hexVert;
    return (new Point(screenX, screenY));
  }

  drawHex(p, c) { /* Point, color */

    var hexCenter = this.hexCoordsToScreen(p);

    // Calculate hex vertices

    var x = [];
    var y = [];
    for (var i = 0; i < 6; i++) {
      var angle = 2 * Math.PI / 6 * (i + 0.5);
      x[i] = hexCenter.x + this.settings.hexSize * Math.cos(angle);
      y[i] = hexCenter.y + this.settings.hexSize * Math.sin(angle);
    }

    // Draw filled hex

    this.state.context.beginPath();
    this.state.context.moveTo(x[0], y[0]);
    for (var i = 1; i < 6; i++) {
      this.state.context.lineTo(x[i], y[i]);
    }
    this.state.context.closePath();
    this.state.context.fillStyle = c;
    this.state.context.fill();

    // Save context and create a hex shaped clip

    this.state.context.save();
    this.state.context.beginPath();
    this.state.context.moveTo(x[0], y[0]);
    for (var i = 1; i < 6; i++) {
      this.state.context.lineTo(x[i], y[i]);
    }
    this.state.context.closePath();
    this.state.context.clip();

    // Calculate hex vertices outside clipped path

    var x2 = [];
    var y2 = [];
    for (var i = 0; i < 6; i++) {
      var angle = 2 * Math.PI / 6 * (i + 0.5);
      // TODO hexSize should already be a number
      x2[i] = hexCenter.x + (parseFloat(this.settings.hexSize) + 3) * Math.cos(angle);
      y2[i] = hexCenter.y + (parseFloat(this.settings.hexSize) + 3) * Math.sin(angle);
    }

    // Draw shadowed stroke outside clip to create pseudo-3d effect

    this.state.context.beginPath();
    this.state.context.moveTo(x2[0], y2[0]);
    for (var i = 1; i < 6; i++) {
      this.state.context.lineTo(x2[i], y2[i]);
    }
    this.state.context.closePath();
    this.state.context.strokeStyle = 'black';
    this.state.context.lineWidth = 5;
    this.state.context.shadowBlur = 15;
    this.state.context.shadowColor = 'black';
    this.state.context.shadowOffsetX = 0;
    this.state.context.shadowOffsetY = 0;
    this.state.context.stroke();
    this.state.context.restore();

    // Add a clean stroke around hex

    this.state.context.beginPath();
    this.state.context.moveTo(x[0], y[0]);
    for (var i = 1; i < 6; i++) {
      this.state.context.lineTo(x[i], y[i]);
    }
    this.state.context.closePath();
    this.state.context.lineWidth = 2;
    this.state.context.lineJoin = 'round';
    this.state.context.strokeStyle = 'black';
    this.state.context.stroke();

    // Add note name and equivalence interval multiple

    this.state.context.save();
    this.state.context.translate(hexCenter.x, hexCenter.y);
    this.state.context.rotate(-this.settings.rotation);
    // hexcoords = p and screenCoords = hexCenter

    //this.state.context.fillStyle = "black"; //bdl_04062016
    this.state.context.fillStyle = getContrastYIQ(this.state.current_text_color);
    this.state.context.font = "22pt Arial";
    this.state.context.textAlign = "center";
    this.state.context.textBaseline = "middle";

    var note = p.x * this.settings.rSteps + p.y * this.settings.urSteps;
    // TODO this should be parsed already
    var equivSteps = this.settings.number_or_name ? parseInt(this.settings.equivSteps) : this.settings.scale.length;
    var equivMultiple = Math.floor(note / equivSteps);
    var reducedNote = note % equivSteps;
    if (reducedNote < 0) {
      reducedNote = equivSteps + reducedNote;
    }

    if (!this.settings.no_labels) {
      var name = this.settings.number_or_name ? "" + reducedNote : this.settings.names[reducedNote];
      if (name) {
        this.state.context.save();
        var scaleFactor = name.length > 3 ? 3 / name.length : 1;
        scaleFactor *= this.settings.hexSize / 50;
        this.state.context.scale(scaleFactor, scaleFactor);
        this.state.context.fillText(name, 0, 0);
        this.state.context.restore();
      }

      var scaleFactor = this.settings.hexSize / 50;
      this.state.context.scale(scaleFactor, scaleFactor);
      this.state.context.translate(10, -25);
      this.state.context.fillStyle = "white";
      this.state.context.font = "12pt Arial";
      this.state.context.textAlign = "center";
      this.state.context.textBaseline = "middle";
      this.state.context.fillText(equivMultiple, 0, 0);
    }

    this.state.context.restore();
  }

  centsToColor(cents, pressed) {
    var returnColor;
    if (!this.settings.spectrum_colors) {
      if (typeof(this.settings.note_colors[this.state.global_pressed_interval]) === 'undefined') {
        returnColor = "#EDEDE4";
      } else {
        returnColor = this.settings.note_colors[this.state.global_pressed_interval];
      }

      var oldColor = returnColor;

      //convert color name to hex
      returnColor = nameToHex(returnColor);

      this.state.current_text_color = returnColor;

      //convert the hex to rgb
      returnColor = hex2rgb(returnColor);

      //darken for pressed key
      if (pressed) {
        returnColor[0] -= 90;
        returnColor[1] -= 90;
      }

      return rgb(returnColor[0], returnColor[1], returnColor[2]);

    }

    var fcolor = hex2rgb("#" + this.settings.fundamental_color);
    fcolor = rgb2hsv(fcolor[0], fcolor[1], fcolor[2]);

    var h = fcolor.h / 360;
    var s = fcolor.s / 100;
    var v = fcolor.v / 100;
    //var h = 145/360; // green
    var reduced = (cents / 1200) % 1;
    if (reduced < 0) reduced += 1;
    h = (reduced + h) % 1;

    v = (pressed) ? v - (v / 2) : v;

    returnColor = HSVtoRGB(h, s, v);

    //setup text color
    var tcolor = HSVtoRGB2(h, s, v);
    this.state.current_text_color = rgbToHex(tcolor.red, tcolor.green, tcolor.blue);
    return returnColor;
  }

  roundTowardZero(val) {
    if (val < 0) {
    return Math.ceil(val);
    }
    return Math.floor(val);
  }

  hexCoordsToCents(coords) {
    var distance = coords.x * this.settings.rSteps + coords.y * this.settings.urSteps;
    var octs = this.roundTowardZero(distance / this.settings.scale.length);
    var reducedSteps = distance % this.settings.scale.length;
    if (reducedSteps < 0) {
      reducedSteps += this.settings.scale.length;
      octs -= 1;
    }
    var cents = octs * this.settings.equivInterval + this.settings.scale[reducedSteps];
    this.state.global_pressed_interval = reducedSteps;
    return cents;
  }

  getHexCoordsAt(coords) {
    coords = applyMatrixToPoint(this.state.rotationMatrix, coords);
    var x = coords.x - this.state.centerpoint.x;
    var y = coords.y - this.state.centerpoint.y;

    var q = (x * Math.sqrt(3) / 3 - y / 3) / this.settings.hexSize;
    var r = y * 2 / 3 / this.settings.hexSize;

    q = Math.round(q);
    r = Math.round(r);

    var guess = this.hexCoordsToScreen(new Point(q, r));

    // This gets an approximation; now check neighbours for minimum distance

    var minimum = 100000;
    var closestHex = new Point(q, r);
    for (var qOffset = -1; qOffset < 2; qOffset++) {
      for (var rOffset = -1; rOffset < 2; rOffset++) {
        var neighbour = new Point(q + qOffset, r + rOffset);
        var diff = this.hexCoordsToScreen(neighbour).minus(coords);
        var distance = diff.x * diff.x + diff.y * diff.y;
        if (distance < minimum) {
          minimum = distance;
          closestHex = neighbour;
        }
      }
    }

    return (closestHex);
  }
}

// TODO something else
function tempAlert(msg, duration) {
  var el = document.createElement("div");
  el.setAttribute("style", "position:absolute;top:40%;left:20%;background-color:white; font-size:25px;");
  el.innerHTML = msg;
  setTimeout(function() {
    el.parentNode.removeChild(el);
  }, duration);
  document.body.appendChild(el);
}

export default Keys;
