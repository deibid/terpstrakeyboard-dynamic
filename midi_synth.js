// TODO channel select, velocity
export const create_midi_synth = async (midi_output) => {
    return {
      makeHex: (coords, cents, relative_interval, steps, octaves) => {
        return new MidiHex(coords, steps, midi_output);
      }
    };
};

function MidiHex(coords, steps, midi) {
  this.coords = coords;// these end up being used by the keys class
  this.release = false;

  this.steps = steps;
  this.midi = midi;
}

MidiHex.prototype.noteOn = function() {
  this.midi.send([0x91, 69 + this.steps, 0x7F]);
};

MidiHex.prototype.noteOff = function() {
  this.midi.send([0x81, 69 + this.steps, 0x7F]);
};
