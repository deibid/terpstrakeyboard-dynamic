export const create_midi_synth = async (midi_output) => {
    return {
      makeHex: (coords) => {
        new MidiHex(coords, midi_output);
      }
    };
};

function MidiHex(coords, midi) {
}

MidiHex.prototype.noteOn = function(cents) {
};

MidiHex.prototype.noteOff = function() {
};
