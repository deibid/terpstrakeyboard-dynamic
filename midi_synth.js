// TODO channel select, velocity
export const create_midi_synth = async (midi_output, channel, velocity) => {
    return {
      makeHex: (coords, cents, relative_interval, steps, octaves) => {
        return new MidiHex(coords, steps, midi_output, channel, velocity);
      }
    };
};

function MidiHex(coords, steps, midi, channel, velocity) {
  this.coords = coords;// these end up being used by the keys class
  this.release = false;

  this.steps = steps;
  this.midi = midi;
  this.channel = channel;
  this.velocity = velocity;
}

MidiHex.prototype.noteOn = function() {
  this.midi.send([0x90 | this.channel, 69 + this.steps, this.velocity]);
};

MidiHex.prototype.noteOff = function() {
  this.midi.send([0x80 | this.channel, 69 + this.steps, this.velocity]);
};
