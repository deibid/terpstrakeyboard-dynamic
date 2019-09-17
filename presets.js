import scale_12_ed2 from './scales/12-ed2.scl';
import scale_12_ji_7l from './scales/12-JI-7L.scl';
import scale_7_ji_rast_maqam from './scales/7-JI Rast Maqam (Arabic) —  Eight Echos (Fourth Plagal, Byzantine).scl';
import scale_17_ji_5l from './scales/17-JI-5L-Arabic-theoretical.scl';
import scale_17_ji_11l_wilson from './scales/17-JI-11L-Wilson.scl';
import scale_22_ji_5l from './scales/22-JI-5L-Indian.scl';
import scale_31_ji_7l_fokker from './scales/31-JI-7L-Fokker.scl';
import scale_53_ri_3l_male_western from './scales/53-RI-3L-Male-Western.scl';
import scale_53_ri_3l_female_eastern from './scales/53-RI-3L-Female-Eastern.scl';
import scale_19_ed2 from './scales/19-ed2.scl';
import scale_31_ed2 from './scales/31-ed2.scl';
import scale_41_ed2 from './scales/41-ed2.scl';
import scale_43_ji_11l_partch from './scales/43-JI-11L-Partch.scl';
import scale_12_stretched_inharmonic6_harmonic7 from './scales/12-Stretched_inharmonic6=harmonic7.scl';
import scale_wmri_in7_har6 from './scales/WMRI-in7-har6-.scl';

const scale_12_ed2_names = ["C", "D♭/C♯", "D", "E♭/D♯", "E", "F", "G♭/F♯", "G", "A♭/G♯", "A", "B♭/A♯", "B"]

export const presets = [
  {
    name: "Isomorphic Layouts for 12-ET",
    settings: [
      {
        name: "Jankó / 6-6/Balanced/Symmetric/Bilinear/Uniform",
        value: {
          "fundamental": 261.6255653,
          "rSteps": 2,
          "urSteps": 1,
          "hexSize": 50,
          "rotation": -6,
          "instrument": "piano",
          "number_or_name": false,
          "equivSteps": 12,
          "piano_colors": true,
          "spectrum_colors": false,
          "no_labels": false,
          "scale": scale_12_ed2,
          "description": "12-tone equal tempered scale consisting of 12 sonically equal divisions per frequency halving/doubling, mapped on a (hexagonal) tilted Jankó layout which can be regarded as a stacked 6-6/Balanced/Symmetric/Bilinear/Uniform Keyboard, and which approximates the 7-white/5-black Halberstadt organ layout (the classic piano keyboard).",
          "names": scale_12_ed2_names,
          "short_description": "12-ed2 Jankó / 6-6/Balanced/Symmetric/Bilinear/Uniform Keyboard / ~Halberstadt",
          "note_colors": ["ffffff", "7b7b7b", "ffffff", "7b7b7b", "ffffff", "ffffff", "7b7b7b", "ffffff", "7b7b7b", "ffffff", "7b7b7b", "ffffff"],
        }
      },
      {
        value: {
          "fundamental": 261.6255653,
          "rSteps": 4,
          "urSteps": -3,
          "hexSize": 50,
          "rotation": 6.0,
          "instrument": "harpsichord",
          "number_or_name": false,
          "equivSteps": 12,
          "piano_colors": true,
          "spectrum_colors": false,
          "no_labels": false,
          "scale": scale_12_ed2,
          "description": "12-tone equal tempered scale consisting of 12 sonically equal divisions per frequency halving/doubling, mapped on the Harmonic Table layout, also known as Sonome: a tonal array topologically equivalent to Euler's Tonnetz, which is a conceptual lattice diagram representing tonal space, also known as 5-Limit Tuning Lattice or Tri-Axial Matrix Model (of Musical Harmony).",
          "short_description": "12-ed2 Harmonic Table / Sonome / Tonnetz / 5-Limit Tuning Lattice / Tri-Axial Matrix Model (of Musical Harmony)",
          "names": scale_12_ed2_names,
          "note_colors": ["ffffff", "bababa", "8ef4fb", "bababa", "ffffff", "ffffff", "bababa", "ffffff", "49aded", "ffffff", "bababa", "ffffff"],
        },
        name: "Harmonic Table / Sonome / Tonnetz / 5-L Lattice / Matrix Model"
      },
      {
        value: {
          "fundamental": 261.6255653,
          "rSteps": 2,
          "urSteps": 7,
          "hexSize": 50,
          "rotation": 343.897886248,
          "instrument": "rhodes",
          "number_or_name": false,
          "equivSteps": 12,
          "piano_colors": true,
          "spectrum_colors": false,
          "no_labels": false,
          "scale": scale_12_ed2,
          "names": scale_12_ed2_names,
          "description": "12-tone equal tempered scale consisting of 12 sonically equal divisions per frequency halving/doubling, mapped on the Wicki-Hayden layout, originally devised for the bandoneon and concertina (free-reed aerophones of the harmonica/accordion family).",
          "short_description": "12-ed2 Wicki-Hayden",
          "note_colors": ["ffffff", "ff9f40", "ffffff", "ff9f40", "ffffff", "ffffff", "ff9f40", "ffffff", "ff9f40", "ffffff", "ff9f40", "ffffff"],
        },
        name: "Wicki-Hayden"
      },

      {
        value: {
          "fundamental": 261.6255653,
          "rSteps": 3,
          "urSteps": 2,
          "hexSize": 50,
          "rotation": 343.897886248,
          "instrument": "sawtooth",
          "number_or_name": false,
          "equivSteps": 12,
          "piano_colors": true,
          "spectrum_colors": false,
          "no_labels": false,
          "scale": scale_12_ed2,
          "names": scale_12_ed2_names,
          "description": "12-tone equal tempered scale consisting of 12 sonically equal divisions per frequency halving/doubling, mapped on a (hexagonal) tilted Chromatic Button System Type-B used on some button accordions.",
          "short_description": "12-ed2 B-System Chromatic Button",
          "note_colors": ["ffffff", "7b7b7b", "ffffff", "7b7b7b", "ffffff", "ffffff", "7b7b7b", "ffffff", "7b7b7b", "ffffff", "7b7b7b", "ffffff"],
        },
        name:"B-System Chromatic Button"
      },
      {
        value: {
          "fundamental": 261.6255653,
          "rSteps": 3,
          "urSteps": 1,
          "hexSize": 50,
          "rotation": 343.897886248,
          "instrument": "sawtooth",
          "number_or_name": false,
          "equivSteps": 12,
          "piano_colors": true,
          "spectrum_colors": false,
          "no_labels": false,
          "scale": scale_12_ed2,
          "names": scale_12_ed2_names,
          "description": "12-tone equal tempered scale consisting of 12 sonically equal divisions per frequency halving/doubling, mapped on a (hexagonal) tilted Chromatic Button System Type-C used on some button accordions.",
          "short_description": "12-ed2 C-System Chromatic Button",
          "note_colors": ["ffffff", "7b7b7b", "ffffff", "7b7b7b", "ffffff", "ffffff", "7b7b7b", "ffffff", "7b7b7b", "ffffff", "7b7b7b", "ffffff"],
        },
        name:"C-System Chromatic Button"
      },
    ]
  },
  {
    name: "Just Intonation",
    settings: [
      {
        value: {
          "fundamental": 256,
          "rSteps": 1,
          "urSteps": 0,
          "hexSize": 50,
          "rotation": 343.897886248,
          "instrument": "qanun",
          "number_or_name": false,
          "equivSteps": 7,
          "spectrum_colors": false,
          "no_labels": false,
          "scale": scale_7_ji_rast_maqam,
          "names": ["1/1", "9/8", "27/22", "4/3", "3/2", "27/16", "81/44"],
          "note_colors": ["ffffff", "ffc37d", "ff9fb7", "f7ffaf", "f7ffaf", "ffc37d", "ff9fb7"],
        },
        "name":  "7-JI Rast Maqam / Eight Echos — Bosanquet / Wilson / Terpstra"
      },

      {
        value: {
          "fundamental": 256,
          "rSteps": 2,
          "urSteps": 1,
          "hexSize": 50,
          "rotation": 343.897886248,
          "instrument": "piano",
          "number_or_name": false,
          "equivSteps": 12,
          "spectrum_colors": false,
          "no_labels": false,
          "scale": scale_12_ji_7l,
          "description": "12-tone Just Intonation classic 7-Limit scale, consisting of 12 rational divisions per frequency halving/doubling with sonic distances derived from the harmonic series up to a prime limit of 7, mapped on a (hexagonal) tilted Jankó layout which can be regarded as a stacked 6-6/Balanced/Symmetric/Bilinear/Uniform Keyboard, and which approximates the 7-white/5-black Halberstadt organ layout (the classic piano keyboard).",
          "short_description": "12-JI-7L Jankó / 6-6/Balanced/Symmetric/Bilinear/Uniform Keyboard / ~Halberstadt",
          "names": ["1/1", "16/15", "9/8", "6/5", "5/4", "4/3", "7/5", "3/2", "8/5", "5/3", "7/4", "15/8"],
          "note_colors": ["55d455", "55f4aa", "55ffff", "55b4ff", "5555ea", "aa55ff", "ff55ff", "ff55aa", "f45555", "ffaa55", "ffff55", "aaf455"],
        },
        "name":  "12-JI-7L Jankó / 6-6/Balanced/Symmetric/Bilinear/Uniform"
      },

      {
        value: {
          "fundamental": 256,
          "rSteps": 3,
          "urSteps": 2,
          "hexSize": 50,
          "rotation": 343.897886248,
          "instrument": "qanun",
          "number_or_name": false,
          "equivSteps": 17,
          "spectrum_colors": false,
          "no_labels": false,
          "scale": scale_17_ji_5l,
          "description": "17-tone Arabic theoretical scale: 5-Limit Just Intonation which is schismatic equivalent to a 17-tone 3-Limit scale generated from 12 steps descending and 4 ascending plus the fundamental, consisting of 17 rational divisions per frequency halving/doubling with sonic distances derived from the harmonic series up to a prime limit of 5, presumably used until the 8th century, mapped on a Bosanquet / Wilson / Terpstra layout.",
          "short_description": "17-JI-5L-Arabic-theoretical Bosanquet / Wilson / Terpstra",
          "names": ["1/1", "256/243", "10/9", "9/8", "32/27", "5/4", "81/64", "4/3", "45/32", "40/27", "3/2", "128/81", "5/3", "27/16", "16/9", "15/8", "160/81"],
          "note_colors": ["f7ffaf", "8fc7ef", "ff9fb7", "f7ffaf", "8fc7ef", "f7ffaf", "ff9fb7", "f7ffaf", "8fc7ef", "ff9fb7", "f7ffaf", "8fc7ef", "f7ffaf", "ff9fb7", "8fc7ef", "f7ffaf", "ff9fb7"]
        },
        "name": "17-JI-5L-Arabic-theoretical Bosanquet / Wilson / Terpstra"
      },

      {
        value: {
          "fundamental": 256,
          "rSteps": 3,
          "urSteps": 2,
          "hexSize": 50,
          "rotation": 343.897886248,
          "instrument": "harp",
          "number_or_name": false,
          "equivSteps": 17,
          "spectrum_colors": false,
          "no_labels": false,
          "scale": scale_17_ji_11l_wilson,
          "description": `17-tone Just Intonation 11-Limit scale by Erv Wilson, consisting of 17 rational divisions per frequency halving/doubling with sonic distances derived from the harmonic series up to a prime limit of 11, mapped on a Bosanquet / Wilson / Terpstra layout.
! Fokblock([64/63, 56/55, 968/945, 36/35], [5, 6, 11, 6]) =
! Fokblock([64/63, 56/55, 36/35, 704/675], [5, 3, 6, 11]) ": "
! Fokblock([64/63, 968/945, 36/35, 704/675], [5, 13, 6, 6]) wakalix`,
          "short_description": "17-JI-11L-Wilson Bosanquet / Wilson / Terpstra",
          "names": ["R", "22/21", "11/10", "9/8", "7/6", "11/9", "5/4", "4/3", "11/8", "22/15", "3/2", "11/7", "44/27", "5/3", "7/4", "11/6", "15/8"],
          "note_colors": ["8fc7ef", "f7ffaf", "ffc37d", "8fc7ef", "f7ffaf", "ffc37d", "8fc7ef", "8fc7ef", "ffc37d", "ffc37d", "8fc7ef", "f7ffaf", "ffc37d", "8fc7ef", "f7ffaf", "ffc37d", "8fc7ef"],
        },
        "name":  "17-JI-11L-Wilson Bosanquet / Wilson / Terpstra"
      },

      {
        value: {
          "fundamental": 272.2044155,
          "rSteps": 4,
          "urSteps": 3,
          "hexSize": 50,
          "rotation": 343.897886248,
          "instrument": "qanun",
          "number_or_name": false,
          "equivSteps": 22,
          "spectrum_colors": false,
          "no_labels": false,
          "scale": scale_22_ji_5l,
          "description": "22-tone Indian scale: 5-Limit Just Intonation which is schismatic equivalent to a 22-tone 3-Limit scale generated from 11 steps ascending and 10 descending plus the fundamental, consisting of 22 rational divisions per frequency halving/doubling with sonic distances derived from the harmonic series up to a prime limit of 5, notated after Alain Daniélou, having as reference frequency the Earth's year transposed 33 octaves higher, mapped on a Bosanquet / Wilson / Terpstra layout.",
          "short_description": "22-JI-5L-Indian Bosanquet / Wilson / Terpstra",
          "names": ["Sa", "ReL-", "ReL+", "Re-", "Re", "GaL", "Gab", "Ga", "Ga+", "Ma", "Ma+", "MaL-", "MaL+", "Pa", "DhaL", "Dhab", "Dha", "Dha+", "NiL+", "Nib", "Ni", "Ni+"],
          "note_colors": ["80df80", "80cfff", "ffbfff", "ffcf80", "80df80", "80cfff", "ffbfff", "80df80", "ffcf80", "80df80", "ffcf80", "80cfff", "ffbfff", "80df80", "80cfff", "ffbfff", "ffcf80", "80df80", "80cfff", "ffbfff", "80df80", "ffcf80"],
        },
        "name":  "22-JI-5L-Indian Bosanquet / Wilson / Terpstra"
      },

      {
        value: {
          "fundamental": 264,
          "rSteps": 5,
          "urSteps": 2,
          "hexSize": 50,
          "rotation": 343.897886248,
          "instrument": "organ",
          "number_or_name": false,
          "equivSteps": 31,
          "spectrum_colors": false,
          "no_labels": false,
          "scale": scale_31_ji_7l_fokker,
          "description": "31-tone Just Intonation 7-Limit scale by Adriaan Fokker, consisting of 31 rational divisions per frequency halving/doubling with sonic distances derived from the harmonic series up to a prime limit of 7, mapped on a Bosanquet / Wilson / Terpstra layout.",
          "short_description":"31-JI-7L-Fokker Bosanquet / Wilson / Terpstra",
          "names": ["1/1", "64/63", "135/128", "15/14", "35/32", "9/8", "8/7", "7/6", "135/112", "315/256", "5/4", "9/7", "21/16", "4/3", "175/128", "45/32", "10/7", "35/24", "3/2", "32/21", "14/9", "45/28", "105/64", "5/3", "12/7", "7/4", "16/9", "945/512", "15/8", "40/21", "63/32"],
          "note_colors": ["ffffff", "ff9f41", "cfcfcf", "bbaa93", "7b7b7b", "ffffff", "ff9f41", "cfcfcf", "bbaa93", "7b7b7b", "ffffff", "bbaa93", "cfcfcf", "ffffff", "ff9f41", "cfcfcf", "bbaa93", "7b7b7b", "ffffff", "ff9f41", "cfcfcf", "bbaa93", "7b7b7b", "ffffff", "ff9f41", "cfcfcf", "bbaa93", "7b7b7b", "ffffff", "bbaa93", "cfcfcf", "ffffff"],
        },
        "name":  "31-JI-7L-Fokker Bosanquet / Wilson / Terpstra"
      },

      {
        "name":  "43-JI-11L-Partch Bosanquet / Wilson / Terpstra",
        "value": {
          "fundamental": 260.74074074,
          "rSteps": 7,
          "urSteps": 3,
          "hexSize": 50,
          "rotation": 343.897886248,
          "instrument": "gayageum",
          "number_or_name": false,
          "equivSteps": 43,
          "spectrum_colors": true,
          "fundamental_color": "55FF55",
          "no_labels": false,
          "scale": scale_43_ji_11l_partch,
          "description": "43-tone Just Intonation 11-Limit scale by Harry Partch, consisting of 43 rational divisions per frequency halving/doubling with sonic distances derived symmetrically from both ascending and descending harmonic series (otonalities and utonalities) up to a prime limit of 11, mapped on a Bosanquet / Wilson / Terpstra layout.",
          "short_description": "43-JI-11L-Partch Bosanquet / Wilson / Terpstra",
          "names": ["1/1", "81/80", "33/32", "21/20", "16/15", "12/11", "11/10", "10/9", "9/8", "8/7", "7/6", "32/27", "6/5", "11/9", "5/4", "14/11", "9/7", "21/16", "4/3", "27/20", "11/8", "7/5", "10/7", "16/11", "40/27", "3/2", "32/21", "14/9", "11/7", "8/5", "18/11", "5/3", "27/16", "12/7", "7/4", "16/9", "9/5", "20/11", "11/6", "15/8", "40/21", "64/33", "160/81"]
        },
      },
      {
        "name":  "53-RI-3L Bosanquet / Wilson / Terpstra Male (Western)",
        value: {
          "fundamental": 256,
          "rSteps": 9,
          "urSteps": 5,
          "hexSize": 50,
          "rotation": 343.897886248,
          "instrument": "qanun",
          "number_or_name": false,
          "equivSteps": 53,
          "spectrum_colors": false,
          "no_labels": false,
          "scale": scale_53_ri_3l_male_western,
          "description": "53-tone Rational Intonation 3-Limit scale, consisting of 53 rational divisions per frequency halving/doubling with sonic distances derived solely from the harmonics 2 and 3 of both ascending and descending harmonic series, mapped on a Bosanquet / Wilson / Terpstra Male (Western) layout.",
          "short_description": "53-RI-3L Bosanquet / Wilson / Terpstra Male (Western)",
          "names": ["2⁰|3⁰", "2¹⁹|3¹²", "2³⁸|3²⁴", "3¹⁷|2²⁷", "3⁵|2⁸", "2¹¹|3⁷", "2³⁰|3¹⁹", "3²²|2³⁵", "3¹⁰|2¹⁶", "2³|3²", "2²²|3¹⁴", "2⁴¹|3²⁶", "3¹⁵|2²⁴", "3³|2⁵", "2¹⁴|3⁹", "2³³|3²¹", "3²⁰|2³²", "3⁸|2¹³", "2⁶|3⁴", "2²⁵|3¹⁶", "3²⁵|2⁴⁰", "3¹³|2²¹", "3¹|2²", "2¹⁷|3¹¹", "2³⁶|3²³", "3¹⁸|2²⁹", "3⁶|2¹⁰", "2⁹|3⁶", "2²⁸|3¹⁸", "3²³|2³⁷", "3¹¹|2¹⁸", "2¹|3¹", "2²⁰|3¹³", "2³⁹|3²⁵", "3¹⁶|2²⁶", "3⁴|2⁷", "2¹²|3⁸", "2³¹|3²⁰", "3²¹|2³⁴", "3⁹|2¹⁵", "2⁴|3³", "2²³|3¹⁵", "3²⁶|2⁴²", "3¹⁴|2²³", "3²|2⁴", "2¹⁵|3¹⁰", "2³⁴|3²²", "3¹⁹|2³¹", "3⁷|2¹²", "2⁷|3⁵", "2²⁶|3¹⁷", "3²⁴|2³⁹", "3¹²|2²⁰", "3⁰|2¹"],
          "note_colors": ["ffffff", "c3b7ab", "e7e7e7", "878787", "ff9f40", "878787", "ff9f40", "e7e7e7", "abb7c3", "ffffff", "c3b7ab", "e7e7e7", "878787", "ff9f40", "878787", "ff9f40", "e7e7e7", "abb7c3", "ffffff", "c3b7ab", "e7e7e7", "abb7c3", "ffffff", "c3b7ab", "e7e7e7", "878787", "ff9f40", "878787", "ff9f40", "e7e7e7", "abb7c3", "ffffff", "c3b7ab", "e7e7e7", "878787", "ff9f40", "878787", "ff9f40", "e7e7e7", "abb7c3", "ffffff", "c3b7ab", "e7e7e7", "878787", "ff9f40", "878787", "ff9f40", "e7e7e7", "abb7c3", "ffffff", "c3b7ab", "e7e7e7", "abb7c3"],
        },
      },

      {
        "name":  "53-RI-3L Mirrored Bosanquet/Wilson / Terpstra Female (Eastern)",
        value: {
          "fundamental": 256,
          "rSteps": 9,
          "urSteps": 4,
          "hexSize": 50,
          "rotation": 16.102113751,
          "instrument": "qanun",
          "number_or_name": false,
          "equivSteps": 53,
          "spectrum_colors": false,
          "no_labels": false,
          "scale": scale_53_ri_3l_female_eastern,
          "description": "53-tone Rational Intonation 3-Limit scale, consisting of 53 rational divisions per frequency halving/doubling with sonic distances derived solely from the harmonics 2 and 3 of both ascending and descending harmonic series, mapped on a Bosanquet / Wilson / Terpstra Female (Eastern) layout.",
          "short_description": "53-RI-3L Bosanquet / Wilson / Terpstra Female (Eastern)",
          "names": ["2⁰|3⁰", "2¹⁹|3¹²", "2³⁸|3²⁴", "3¹⁷|2²⁷", "3⁵|2⁸", "2¹¹|3⁷", "2³⁰|3¹⁹", "3²²|2³⁵", "3¹⁰|2¹⁶", "2³|3²", "2²²|3¹⁴", "2⁴¹|3²⁶", "3¹⁵|2²⁴", "3³|2⁵", "2¹⁴|3⁹", "2³³|3²¹", "3²⁰|2³²", "3⁸|2¹³", "2⁶|3⁴", "2²⁵|3¹⁶", "3²⁵|2⁴⁰", "3¹³|2²¹", "3¹|2²", "2¹⁷|3¹¹", "2³⁶|3²³", "3¹⁸|2²⁹", "3⁶|2¹⁰", "2⁹|3⁶", "2²⁸|3¹⁸", "3²³|2³⁷", "3¹¹|2¹⁸", "2¹|3¹", "2²⁰|3¹³", "2³⁹|3²⁵", "3¹⁶|2²⁶", "3⁴|2⁷", "2¹²|3⁸", "2³¹|3²⁰", "3²¹|2³⁴", "3⁹|2¹⁵", "2⁴|3³", "2²³|3¹⁵", "3²⁶|2⁴²", "3¹⁴|2²³", "3²|2⁴", "2¹⁵|3¹⁰", "2³⁴|3²²", "3¹⁹|2³¹", "3⁷|2¹²", "2⁷|3⁵", "2²⁶|3¹⁷", "3²⁴|2³⁹", "3¹²|2²⁰", "3⁰|2¹"],
          "note_colors": ["ffffff", "c3b7ab", "e7e7e7", "878787", "ff9f40", "878787", "ff9f40", "e7e7e7", "abb7c3", "ffffff", "c3b7ab", "e7e7e7", "878787", "ff9f40", "878787", "ff9f40", "e7e7e7", "abb7c3", "ffffff", "c3b7ab", "e7e7e7", "abb7c3", "ffffff", "c3b7ab", "e7e7e7", "878787", "ff9f40", "878787", "ff9f40", "e7e7e7", "abb7c3", "ffffff", "c3b7ab", "e7e7e7", "878787", "ff9f40", "878787", "ff9f40", "e7e7e7", "abb7c3", "ffffff", "c3b7ab", "e7e7e7", "878787", "ff9f40", "878787", "ff9f40", "e7e7e7", "abb7c3", "ffffff", "c3b7ab", "e7e7e7", "abb7c3"],
        },
      },
    ]
  },

  {
    name: "Equal Temperaments",
    settings: [
      {
        "name":  "19-ed2 Bosanquet / Wilson / Terpstra",
        value: {
          "fundamental": 254.5642522,
          "rSteps": 3,
          "urSteps": 1,
          "hexSize": 50,
          "rotation": 343.897886248,
          "instrument": "piano",
          "number_or_name": false,
          "equivSteps": 19,
          "spectrum_colors": false,
          "no_labels": false,
          "scale": scale_19_ed2,
          "description": "19-tone equal tempered scale consisting of 12 sonically equal divisions per frequency halving/doubling, mapped on a Bosanquet / Wilson / Terpstra layout.",
          "short_description": "19-ed2 Bosanquet / Wilson / Terpstra",
          "names": ["C", "C♯", "D♭", "D", "D♯", "E♭", "E", "E♯/F♭", "F", "F♯", "G♭", "G", "G♯", "A♭", "A", "A♯", "B♭", "B", "B♯/C♭"],
          "note_colors": ["ffffff", "7fbfd4", "ff9f40", "ffffff", "7fbfd4", "ff9f40", "ffffff", "bfaf8a", "ffffff", "7fbfd4", "ff9f40", "ffffff", "7fbfd4", "ff9f40", "ffffff", "7fbfd4", "ff9f40", "ffffff", "bfaf8a"],
        },
      },
      {
        value: {
          "fundamental": 263.09212,
          "rSteps": 5,
          "urSteps": 2,
          "hexSize": 50,
          "rotation": 343.897886248,
          "instrument": "organ",
          "number_or_name": false,
          "equivSteps": 31,
          "spectrum_colors": false,
          "no_labels": false,
          "scale": scale_31_ed2,
          "description": "31-tone equal tempered scale consisting of 31 sonically equal divisions per frequency halving/doubling in standard meantone notation, mapped on a Bosanquet / Wilson / Terpstra layout.",
          "short_description": "31-ed2 Bosanquet / Wilson / Terpstra",
          "names": ["C", "D♭♭", "C♯", "D♭", "C×", "D", "E♭♭", "D♯", "E♭", "D×", "E", "F♭", "E♯", "F", "G♭♭", "F♯", "G♭", "F×", "G", "A♭♭", "G♯", "A♭", "G×", "A", "B♭♭", "A♯", "B♭", "A×", "B", "C♭", "B♯"],
          "note_colors": ["ffffff", "ff9f41", "cfcfcf", "bbaa93", "7b7b7b", "ffffff", "ff9f41", "cfcfcf", "bbaa93", "7b7b7b", "ffffff", "bbaa93", "cfcfcf", "ffffff", "ff9f41", "cfcfcf", "bbaa93", "7b7b7b", "ffffff", "ff9f41", "cfcfcf", "bbaa93", "7b7b7b", "ffffff", "ff9f41", "cfcfcf", "bbaa93", "7b7b7b", "ffffff", "bbaa93", "cfcfcf", "ffffff"],
        },
        "name":  "31-ed2 Bosanquet / Wilson / Terpstra"
      },

      {
        value: {
          "fundamental": 260.5221364,
          "rSteps": 7,
          "urSteps": 4,
          "hexSize": 50,
          "rotation": 343.897886248,
          "instrument": "harp",
          "number_or_name": true,
          "equivSteps": 41,
          "spectrum_colors": false,
          "no_labels": false,
          "scale": scale_41_ed2,
          "description": "41-tone equal tempered scale consisting of 41 sonically equal divisions per frequency halving/doubling, mapped on a Bosanquet / Wilson / Terpstra layout.",
          "short_description": "41-ed2 Bosanquet / Wilson / Terpstra",
          "names": ["0/41", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40"],
          "note_colors": ["ffffff", "c3b7ab", "878787", "ff9f40", "878787", "ff9f40", "abb7c3", "ffffff", "c3b7ab", "878787", "ff9f40", "878787", "ff9f40", "abb7c3", "ffffff", "c3b7ab", "abb7c3", "ffffff", "c3b7ab", "878787", "ff9f40", "878787", "ff9f40", "abb7c3", "ffffff", "c3b7ab", "878787", "ff9f40", "878787", "ff9f40", "abb7c3", "ffffff", "c3b7ab", "878787", "ff9f40", "878787", "ff9f40", "abb7c3", "ffffff", "c3b7ab", "abb7c3"],
        },
        "name":  "41-ed2 Bosanquet / Wilson / Terpstra"
      },
    ]},

  { name: "Stretched & Compressed Tunings",
    settings: [
      {
        value: {
          "fundamental": 256,
          "rSteps": 2,
          "urSteps": 1,
          "hexSize": 50,
          "rotation": 343.897886248,
          "instrument": "WMRI-in6-har7-",
          "number_or_name": false,
          "equivSteps": 12,
          "spectrum_colors": true,
          "fundamental_color": "55FF55",
          "no_labels": false,
          "scale": scale_12_stretched_inharmonic6_harmonic7,
          "names": ["n=log₇6", "(16/15)ⁿ", "(9/8)ⁿ", "(6/5)ⁿ", "(5/4)ⁿ", "(4/3)ⁿ", "(45/32)ⁿ", "(3/2)ⁿ", "(8/5)ⁿ", "(5/3)ⁿ", "(16/9)ⁿ", "(15/8)ⁿ"],
          "note_colors": ["ffffff", "7b7b7b", "ffffff", "7b7b7b", "ffffff", "ffffff", "7b7b7b", "ffffff", "7b7b7b", "ffffff", "7b7b7b", "ffffff"],
        },
        "name":  "12-Stretched inharmonic 6 = harmonic 7 - Jankó / ..."
      },

      {
        value: {
          "fundamental": 256,
          "rSteps": 2,
          "urSteps": 1,
          "hexSize": 50,
          "rotation": 343.897886248,
          "instrument": "WMRI-in7-har6-",
          "number_or_name": false,
          "equivSteps": 12,
          "spectrum_colors": true,
          "fundamental_color": "55FF55",
          "no_labels": false,
          "scale": scale_wmri_in7_har6,
          "descriptions": `12 compressed tones derived from an inharmonic timbre whose inharmonic 7 has same frequency as natural harmonic 6 (to be played with the "WMRI inharmonic 7 = harmonic 6" Study Tone for Total Resonance), mapped on a (hexagonal) tilted Jankó layout which can be regarded as a stacked 6-6/Balanced/Symmetric/Bilinear/Uniform Keyboard, and which approximates the 7-white/5-black Halberstadt organ layout (the classic piano keyboard).`,
          "short_description": `12 Compressed inharmonic 7 ": " harmonic 6 - Jankó / 6-6/Balanced/Symmetric/Bilinear/Uniform Keyboard / ~Halberstadt | Terpstra Keyboard WebApp`,
          "names": ["log₇6", "(16/15)", "(9/8)", "(6/5)", "(5/4)", "(4/3)", "(45/32)", "(3/2)", "(8/5)", "(5/3)", "(16/9)", "(15/8)"],
          "note_colors": ["ffffff", "7b7b7b", "ffffff", "7b7b7b", "ffffff", "ffffff", "7b7b7b", "ffffff", "7b7b7b", "ffffff", "7b7b7b", "ffffff"],
        },
        "name":  "12-Compressed inharmonic 7 & harmonic 6 - Jankó / ..."
      },
    ]
  },
];

export default presets;

export const default_settings = presets[0].settings[0].value;
