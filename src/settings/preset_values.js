import scale_12_ed2 from 'scales/12-ed2.scl';
import scale_12_ji_7l from 'scales/12-JI-7L.scl';
import scale_7_ji_rast_maqam from 'scales/7-JI Rast Maqam (Arabic) —  Eight Echos (Fourth Plagal, Byzantine).scl';
import scale_17_ji_5l from 'scales/17-JI-5L-Arabic-theoretical.scl';
import scale_17_ji_11l_wilson from 'scales/17-JI-11L-Wilson.scl';
import scale_22_ji_5l from 'scales/22-JI-5L-Indian.scl';
import scale_31_ji_7l_fokker from 'scales/31-JI-7L-Fokker.scl';
import scale_53_ri_3l_male_western from 'scales/53-RI-3L-Male-Western.scl';
import scale_53_ri_3l_female_eastern from 'scales/53-RI-3L-Female-Eastern.scl';
import scale_19_ed2 from 'scales/19-ed2.scl';
import scale_31_ed2 from 'scales/31-ed2.scl';
import scale_41_ed2 from 'scales/41-ed2.scl';
import scale_43_ji_11l_partch from 'scales/43-JI-11L-Partch.scl';
import scale_12_stretched_inharmonic6_harmonic7 from 'scales/12-Stretched_inharmonic6=harmonic7.scl';
import scale_wmri_in7_har6 from 'scales/WMRI-in7-har6-.scl';
import scale_david from 'scales/David.scl';
import scale_1 from 'scales/Scale1.scl'
import scale_2 from 'scales/Scale2.scl'
import scale_3 from 'scales/Scale3.scl'
import scale_4 from 'scales/Scale4.scl'
import scale_5 from 'scales/Scale5.scl'


import { parseScale } from './scale/parse-scale';

const scale_12_ed2_names = ["C", "C♯/D♭", "D", "D♯/E♭", "E", "F", "F♯/G♭", "G", "G♯/A♭", "A", "A♯/B♭", "B"];
const scale_12_ed2_parsed = parseScale(scale_12_ed2).scale;
export const presets = [
  {
    "name": "Isomorphic Layouts for 12-ET",
    settings: [

      {
        "output": "sample", //don't change
        "fundamental": 261.6255653, //don't change
        "rSteps": 1, // right facing steps (layout)
        "urSteps": 1, // upright facing steps (layout)
        "hexSize": 50, //layout
        "rotation": 30.0, //layout
        "instrument": "rhodes", //sample to lay
        "key_labels": "names", //setting to show on the keys
        "equivSteps": 12, //amount of values in the scale. count the ones on the individual .scl files
        "spectrum_colors": false, //layout
        "scale": scale_12_ed2_parsed,
        "description": "12-tone equal tempered scale consisting of 12 sonically equal divisions per frequency halving/doubling, mapped on Gerhard layout.", //layout
        "short_description": "12-ed2 Gerhard", //layout
        "names": scale_12_ed2_names,
        "note_colors": ["#ffffff", "#bababa", "#8ef4fb", "#bababa", "#ffffff", "#ffffff", "#bababa", "#ffffff", "#49aded", "#ffffff", "#bababa", "#ffffff"], //layout
        "name": "Gerhard" //layout. Name. Necessary
      }
    ]
  },
  {
    "name": "Hyper-Instrument",
    settings: [
      {
        "output": "sample",
        "fundamental": 261.63,
        "rSteps": 2,
        "urSteps": 1,
        "hexSize": 50,
        "rotation": 343.897886248,
        "instrument": "WMRI-in6-har7-",
        "key_labels": "names",
        "equivSteps": 7,
        "spectrum_colors": true,
        "fundamental_color": "#55FF55",
        "scale": parseScale(scale_1).scale,
        "names": ["1", "2", "3", "4", "5", "6", "7"],
        "note_colors": ["#ffffff", "#7b7b7b", "#ffffff", "#7b7b7b", "#ffffff", "#ffffff", "#7b7b7b", "#ffffff", "#7b7b7b", "#ffffff", "#7b7b7b", "#ffffff"],
        "name": "C Major"
      },
      {
        "output": "sample",
        "fundamental": 256,
        "rSteps": 2,
        "urSteps": 1,
        "hexSize": 50,
        "rotation": 343.897886248,
        "instrument": "WMRI-in6-har7-",
        "key_labels": "names",
        "equivSteps": 7,
        "spectrum_colors": true,
        "fundamental_color": "#55FF55",
        "scale": parseScale(scale_2).scale,
        "names": ["1", "2", "3", "4", "5", "6", "7"],
        "note_colors": ["#ffffff", "#7b7b7b", "#ffffff", "#7b7b7b", "#ffffff", "#ffffff", "#7b7b7b", "#ffffff", "#7b7b7b", "#ffffff", "#7b7b7b", "#ffffff"],
        "name": "F Major"
      },
      {
        "output": "sample",
        "fundamental": 261.6255653,
        "rSteps": 2,
        "urSteps": -1,
        "hexSize": 50,
        "rotation": 0,
        "instrument": "rhodes",
        "key_labels": "names",
        "equivSteps": 12,
        "spectrum_colors": true,
        "fundamental_color": "#55FF55",
        "scale": parseScale(scale_3).scale,
        "names": ["C", "C♯/D♭", "D", "D♯/E♭", "E", "F", "F♯/G♭", "G", "G♯/A♭", "A", "A♯/B♭", "B"],
        "note_colors": ["#ffffff", "#7b7b7b", "#ffffff", "#7b7b7b", "#ffffff", "#ffffff", "#7b7b7b", "#ffffff", "#7b7b7b", "#ffffff", "#7b7b7b", "#ffffff"],
        "name": "C Chromatic"
      },
      {
        "output": "sample",
        "fundamental": 256,
        "rSteps": 2,
        "urSteps": 1,
        "hexSize": 50,
        "rotation": 343.897886248,
        "instrument": "WMRI-in6-har7-",
        "key_labels": "names",
        "equivSteps": 7,
        "spectrum_colors": true,
        "fundamental_color": "#55FF55",
        "scale": parseScale(scale_4).scale,
        "names": ["1", "2", "3", "4", "5", "6", "7"],
        "note_colors": ["#ffffff", "#7b7b7b", "#ffffff", "#7b7b7b", "#ffffff", "#ffffff", "#7b7b7b", "#ffffff", "#7b7b7b", "#ffffff", "#7b7b7b", "#ffffff"],
        "name": "Eb Major"
      },
      {
        "output": "sample",
        "fundamental": 256,
        "rSteps": 2,
        "urSteps": 1,
        "hexSize": 50,
        "rotation": 343.897886248,
        "instrument": "WMRI-in6-har7-",
        "key_labels": "names",
        "equivSteps": 7,
        "spectrum_colors": true,
        "fundamental_color": "#55FF55",
        "scale": parseScale(scale_5).scale,
        "names": ["1", "2", "3", "4", "5", "6", "7"],
        "note_colors": ["#ffffff", "#7b7b7b", "#ffffff", "#7b7b7b", "#ffffff", "#ffffff", "#7b7b7b", "#ffffff", "#7b7b7b", "#ffffff", "#7b7b7b", "#ffffff"],
        "name": "A Minor"
      },
    ]
  },

];

export default presets;

export const default_settings = presets[0].settings[0];
