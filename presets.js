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

const scale_12_ed2_names = `C\nD♭/C♯\nD\nE♭/D♯\nE\nF\nG♭/F♯\nG\nA♭/G♯\nA\nB♭/A♯\nB`;

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
          "note_colors": "ffffff\n7b7b7b\nffffff\n7b7b7b\nffffff\nffffff\n7b7b7b\nffffff\n7b7b7b\nffffff\n7b7b7b\nffffff\n"
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
          "note_colors": `ffffff\nbababa\n8ef4fb\nbababa\nffffff\nffffff\nbababa\nffffff\n49aded\nffffff\nbababa\nffffff\n`,
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
          "note_colors": `ffffff\nff9f40\nffffff\nff9f40\nffffff\nffffff\nff9f40\nffffff\nff9f40\nffffff\nff9f40\nffffff\n`
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
          "note_colors": "ffffff\n7b7b7b\nffffff\n7b7b7b\nffffff\nffffff\n7b7b7b\nffffff\n7b7b7b\nffffff\n7b7b7b\nffffff\n",
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
          "note_colors": `ffffff\n7b7b7b\nffffff\n7b7b7b\nffffff\nffffff\n7b7b7b\nffffff\n7b7b7b\nffffff\n7b7b7b\nffffff\n`,
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
          "names": `1/1\n9/8\n27/22\n4/3\n3/2\n27/16\n81/44\n`,
          "note_colors":`ffffff\nffc37d\nff9fb7\nf7ffaf\nf7ffaf\nffc37d\nff9fb7\n`,
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
          "names": "1/1\n16/15\n9/8\n6/5\n5/4\n4/3\n7/5\n3/2\n8/5\n5/3\n7/4\n15/8\n",
          "note_colors": "55d455\n55f4aa\n55ffff\n55b4ff\n5555ea\naa55ff\nff55ff\nff55aa\nf45555\nffaa55\nffff55\naaf455\n",
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
          "names": `1/1\n256/243\n10/9\n9/8\n32/27\n5/4\n81/64\n4/3\n45/32\n40/27\n3/2\n128/81\n5/3\n27/16\n16/9\n15/8\n160/81`,
          "note_colors":`f7ffaf 8fc7ef ff9fb7 f7ffaf 8fc7ef f7ffaf ff9fb7 f7ffaf 8fc7ef ff9fb7 f7ffaf 8fc7ef f7ffaf ff9fb7 8fc7ef f7ffaf ff9fb7 `,
        },
        "name":  "17-JI-5L-Arabic-theoretical Bosanquet / Wilson / Terpstra"
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
          "names": `R\n22/21\n11/10\n9/8\n7/6\n11/9\n5/4\n4/3\n11/8\n22/15\n3/2\n11/7\n44/27\n5/3\n7/4\n11/6\n15/8\n`,
          "note_colors": `8fc7ef\nf7ffaf\nffc37d\n8fc7ef\nf7ffaf\nffc37d\n8fc7ef\n8fc7ef\nffc37d\nffc37d\n8fc7ef\nf7ffaf\nffc37d\n8fc7ef\nf7ffaf\nffc37d\n8fc7ef\n`,
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
          "names": `Sa\nReL-\nReL+\nRe-\nRe\nGaL\nGab\nGa\nGa+\nMa\nMa+\nMaL-\nMaL+\nPa\nDhaL\nDhab\nDha\nDha+\nNiL+\nNib\nNi\nNi+`,
          "note_colors": `80df80\n80cfff\nffbfff\nffcf80\n80df80\n80cfff\nffbfff\n80df80\nffcf80\n80df80\nffcf80\n80cfff\nffbfff\n80df80\n80cfff\nffbfff\nffcf80\n80df80\n80cfff\nffbfff\n80df80\nffcf80\n`,
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
          "names": `1/1\n64/63\n135/128\n15/14\n35/32\n9/8\n8/7\n7/6\n135/112\n315/256\n5/4\n9/7\n21/16\n4/3\n175/128\n45/32\n10/7\n35/24\n3/2\n32/21\n14/9\n45/28\n105/64\n5/3\n12/7\n7/4\n16/9\n945/512\n15/8\n40/21\n63/32`,
          "note_colors":`ffffff\nff9f41\ncfcfcf\nbbaa93\n7b7b7b\nffffff\nff9f41\ncfcfcf\nbbaa93\n7b7b7b\nffffff\nbbaa93\ncfcfcf\nffffff\nff9f41\ncfcfcf\nbbaa93\n7b7b7b\nffffff\nff9f41\ncfcfcf\nbbaa93\n7b7b7b\nffffff\nff9f41\ncfcfcf\nbbaa93\n7b7b7b\nffffff\nbbaa93\ncfcfcf\nffffff\n`,
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
          "names": `1/1\n81/80\n33/32\n21/20\n16/15\n12/11\n11/10\n10/9\n9/8\n8/7\n7/6\n32/27\n6/5\n11/9\n5/4\n14/11\n9/7\n21/16\n4/3\n27/20\n11/8\n7/5\n10/7\n16/11\n40/27\n3/2\n32/21\n14/9\n11/7\n8/5\n18/11\n5/3\n27/16\n12/7\n7/4\n16/9\n9/5\n20/11\n11/6\n15/8\n40/21\n64/33\n160/81`,
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
          "names": `2⁰|3⁰\n2¹⁹|3¹²\n2³⁸|3²⁴\n3¹⁷|2²⁷\n3⁵|2⁸\n2¹¹|3⁷\n2³⁰|3¹⁹\n3²²|2³⁵\n3¹⁰|2¹⁶\n2³|3²\n2²²|3¹⁴\n2⁴¹|3²⁶\n3¹⁵|2²⁴\n3³|2⁵\n2¹⁴|3⁹\n2³³|3²¹\n3²⁰|2³²\n3⁸|2¹³\n2⁶|3⁴\n2²⁵|3¹⁶\n3²⁵|2⁴⁰\n3¹³|2²¹\n3¹|2²\n2¹⁷|3¹¹\n2³⁶|3²³\n3¹⁸|2²⁹\n3⁶|2¹⁰\n2⁹|3⁶\n2²⁸|3¹⁸\n3²³|2³⁷\n3¹¹|2¹⁸\n2¹|3¹\n2²⁰|3¹³\n2³⁹|3²⁵\n3¹⁶|2²⁶\n3⁴|2⁷\n2¹²|3⁸\n2³¹|3²⁰\n3²¹|2³⁴\n3⁹|2¹⁵\n2⁴|3³\n2²³|3¹⁵\n3²⁶|2⁴²\n3¹⁴|2²³\n3²|2⁴\n2¹⁵|3¹⁰\n2³⁴|3²²\n3¹⁹|2³¹\n3⁷|2¹²\n2⁷|3⁵\n2²⁶|3¹⁷\n3²⁴|2³⁹\n3¹²|2²⁰\n3⁰|2¹`,
          "note_colors":`ffffff\nc3b7ab\ne7e7e7\n878787\nff9f40\n878787\nff9f40\ne7e7e7\nabb7c3\nffffff\nc3b7ab\ne7e7e7\n878787\nff9f40\n878787\nff9f40\ne7e7e7\nabb7c3\nffffff\nc3b7ab\ne7e7e7\nabb7c3\nffffff\nc3b7ab\ne7e7e7\n878787\nff9f40\n878787\nff9f40\ne7e7e7\nabb7c3\nffffff\nc3b7ab\ne7e7e7\n878787\nff9f40\n878787\nff9f40\ne7e7e7\nabb7c3\nffffff\nc3b7ab\ne7e7e7\n878787\nff9f40\n878787\nff9f40\ne7e7e7\nabb7c3\nffffff\nc3b7ab\ne7e7e7\nabb7c3\n`,},
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
          "names": `2⁰|3⁰\n2¹⁹|3¹²\n2³⁸|3²⁴\n3¹⁷|2²⁷\n3⁵|2⁸\n2¹¹|3⁷\n2³⁰|3¹⁹\n3²²|2³⁵\n3¹⁰|2¹⁶\n2³|3²\n2²²|3¹⁴\n2⁴¹|3²⁶\n3¹⁵|2²⁴\n3³|2⁵\n2¹⁴|3⁹\n2³³|3²¹\n3²⁰|2³²\n3⁸|2¹³\n2⁶|3⁴\n2²⁵|3¹⁶\n3²⁵|2⁴⁰\n3¹³|2²¹\n3¹|2²\n2¹⁷|3¹¹\n2³⁶|3²³\n3¹⁸|2²⁹\n3⁶|2¹⁰\n2⁹|3⁶\n2²⁸|3¹⁸\n3²³|2³⁷\n3¹¹|2¹⁸\n2¹|3¹\n2²⁰|3¹³\n2³⁹|3²⁵\n3¹⁶|2²⁶\n3⁴|2⁷\n2¹²|3⁸\n2³¹|3²⁰\n3²¹|2³⁴\n3⁹|2¹⁵\n2⁴|3³\n2²³|3¹⁵\n3²⁶|2⁴²\n3¹⁴|2²³\n3²|2⁴\n2¹⁵|3¹⁰\n2³⁴|3²²\n3¹⁹|2³¹\n3⁷|2¹²\n2⁷|3⁵\n2²⁶|3¹⁷\n3²⁴|2³⁹\n3¹²|2²⁰\n3⁰|2¹`,
          "note_colors":`ffffff\nc3b7ab\ne7e7e7\n878787\nff9f40\n878787\nff9f40\ne7e7e7\nabb7c3\nffffff\nc3b7ab\ne7e7e7\n878787\nff9f40\n878787\nff9f40\ne7e7e7\nabb7c3\nffffff\nc3b7ab\ne7e7e7\nabb7c3\nffffff\nc3b7ab\ne7e7e7\n878787\nff9f40\n878787\nff9f40\ne7e7e7\nabb7c3\nffffff\nc3b7ab\ne7e7e7\n878787\nff9f40\n878787\nff9f40\ne7e7e7\nabb7c3\nffffff\nc3b7ab\ne7e7e7\n878787\nff9f40\n878787\nff9f40\ne7e7e7\nabb7c3\nffffff\nc3b7ab\ne7e7e7\nabb7c3\n`,
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
          "names": `C\nC♯\nD♭\nD\nD♯\nE♭\nE\nE♯/F♭\nF\nF♯\nG♭\nG\nG♯\nA♭\nA\nA♯\nB♭\nB\nB♯/C♭`,
          "note_colors":`ffffff\n7fbfd4\nff9f40\nffffff\n7fbfd4\nff9f40\nffffff\nbfaf8a\nffffff\n7fbfd4\nff9f40\nffffff\n7fbfd4\nff9f40\nffffff\n7fbfd4\nff9f40\nffffff\nbfaf8a\n`,
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
          "names": `C\nD♭♭\nC♯\nD♭\nC×\nD\nE♭♭\nD♯\nE♭\nD×\nE\nF♭\nE♯\nF\nG♭♭\nF♯\nG♭\nF×\nG\nA♭♭\nG♯\nA♭\nG×\nA\nB♭♭\nA♯\nB♭\nA×\nB\nC♭\nB♯`,
          "note_colors":`ffffff\nff9f41\ncfcfcf\nbbaa93\n7b7b7b\nffffff\nff9f41\ncfcfcf\nbbaa93\n7b7b7b\nffffff\nbbaa93\ncfcfcf\nffffff\nff9f41\ncfcfcf\nbbaa93\n7b7b7b\nffffff\nff9f41\ncfcfcf\nbbaa93\n7b7b7b\nffffff\nff9f41\ncfcfcf\nbbaa93\n7b7b7b\nffffff\nbbaa93\ncfcfcf\nffffff\n`,
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
          "names": `0/41\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35\n36\n37\n38\n39\n40`,
          "note_colors": `ffffff\nc3b7ab\n878787\nff9f40\n878787\nff9f40\nabb7c3\nffffff\nc3b7ab\n878787\nff9f40\n878787\nff9f40\nabb7c3\nffffff\nc3b7ab\nabb7c3\nffffff\nc3b7ab\n878787\nff9f40\n878787\nff9f40\nabb7c3\nffffff\nc3b7ab\n878787\nff9f40\n878787\nff9f40\nabb7c3\nffffff\nc3b7ab\n878787\nff9f40\n878787\nff9f40\nabb7c3\nffffff\nc3b7ab\nabb7c3\n`,
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
          "names": "log₆7\n(16/15)ⁿ\n(9/8)ⁿ\n(6/5)ⁿ\n(5/4)ⁿ\n(4/3)ⁿ\n(45/32)ⁿ\n(3/2)ⁿ\n(8/5)ⁿ\n(5/3)ⁿ\n(16/9)ⁿ\n(15/8)ⁿ\n",
          "note_colors": `ffffff\n7b7b7b\nffffff\n7b7b7b\nffffff\nffffff\n7b7b7b\nffffff\n7b7b7b\nffffff\n7b7b7b\nffffff\n`,
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
          "names": `log₇6\n(16/15)\n(9/8)\n(6/5)\n(5/4)\n(4/3)\n(45/32)\n(3/2)\n(8/5)\n(5/3)\n(16/9)\n(15/8)`,
          "note_colors":`ffffff\n7b7b7b\nffffff\n7b7b7b\nffffff\nffffff\n7b7b7b\nffffff\n7b7b7b\nffffff\n7b7b7b\nffffff\n`,
        },
        "name":  "12-Compressed inharmonic 7 & harmonic 6 - Jankó / ..."
      },
    ]
  },
];

export default presets;

export const default_settings = presets[0].settings[0].value;
