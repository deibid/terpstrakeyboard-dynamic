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
          "rotation": 343.897886248,
          "instrument": "piano",
          "number_or_name": false,
          "equivSteps": 12,
          "piano_colors": true,
          "spectrum_colors": false,
          "no_labels": false,
          "scale":
          // TODO load these from files
          `! 12-ed2 Jankó 6-6 Balanced Symmetric Bilinear Uniform Keyboard ~Halberstadt.scl
! 12-tone equal tempered scale consisting of 12 sonically equal divisions per frequency halving/doubling, mapped on a (hexagonal) tilted Jankó layout which can be regarded as a stacked 6-6/Balanced/Symmetric/Bilinear/Uniform Keyboard, and which approximates the 7-white/5-black Halberstadt organ layout (the classic piano keyboard).
!
Terpstra Keyboard WebApp | 12-ed2 Jankó / 6-6/Balanced/Symmetric/Bilinear/Uniform Keyboard / ~Halberstadt
12
!
100.00000
200.00000
300.00000
400.00000
500.00000
600.00000
700.00000
800.00000
900.00000
1000.00000
1100.00000
1200.00000`,
          "names":
          `C
D♭/C♯
D
E♭/D♯
E
F
G♭/F♯
G
A♭/G♯
A
B♭/A♯
B`,
          "note_colors":
          `ffffff
7b7b7b
ffffff
7b7b7b
ffffff
ffffff
7b7b7b
ffffff
7b7b7b
ffffff
7b7b7b
ffffff
`
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
          "scale":
          `! 12-ed2 Harmonic Table Sonome Tonnetz 5-Limit Tuning Lattice Tri-Axial Matrix Model (of Musical Harmony).scl
! 12-tone equal tempered scale consisting of 12 sonically equal divisions per frequency halving/doubling, mapped on the Harmonic Table layout, also known as Sonome: a tonal array topologically equivalent to Euler's Tonnetz, which is a conceptual lattice diagram representing tonal space, also known as 5-Limit Tuning Lattice or Tri-Axial Matrix Model (of Musical Harmony).
!
Terpstra Keyboard WebApp | 12-ed2 Harmonic Table / Sonome / Tonnetz / 5-Limit Tuning Lattice / Tri-Axial Matrix Model (of Musical Harmony)
12
!
100.00000
200.00000
300.00000
400.00000
500.00000
600.00000
700.00000
800.00000
900.00000
1000.00000
1100.00000
1200.00000`,
          "names":
          `C
D♭/C♯
D
E♭/D♯
E
F
G♭/F♯
G
A♭/G♯
A
B♭/A♯
B`,
          "note_colors":
          `ffffff
bababa
8ef4fb
bababa
ffffff
ffffff
bababa
ffffff
49aded
ffffff
bababa
ffffff
`,
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
          "scale":
          `! 12-ed2 Wicki-Hayden.scl
! 12-tone equal tempered scale consisting of 12 sonically equal divisions per frequency halving/doubling, mapped on the Wicki-Hayden layout, originally devised for the bandoneon and concertina (free-reed aerophones of the harmonica/accordion family).
!
Terpstra Keyboard WebApp | 12-ed2 Wicki-Hayden
12
!
100.00000
200.00000
300.00000
400.00000
500.00000
600.00000
700.00000
800.00000
900.00000
1000.00000
1100.00000
1200.00000`,
          "names":
          `C
D♭/C♯
D
E♭/D♯
E
F
G♭/F♯
G
A♭/G♯
A
B♭/A♯
B`,
          "note_colors":
          `ffffff
ff9f40
ffffff
ff9f40
ffffff
ffffff
ff9f40
ffffff
ff9f40
ffffff
ff9f40
ffffff
`
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
          "scale":
          ` 12-ed2 B-System Chromatic Button.scl
! 12-tone equal tempered scale consisting of 12 sonically equal divisions per frequency halving/doubling, mapped on a (hexagonal) tilted Chromatic Button System Type-B used on some button accordions.
!
Terpstra Keyboard WebApp | 12-ed2 B-System Chromatic Button
12
!
100.00000
200.00000
300.00000
400.00000
500.00000
600.00000
700.00000
800.00000
900.00000
1000.00000
1100.00000
1200.00000`,
          "names":
          `C
D♭/C♯
D
E♭/D♯
E
F
G♭/F♯
G
A♭/G♯
A
B♭/A♯
B`,
          "note_colors":
          `ffffff
7b7b7b
ffffff
7b7b7b
ffffff
ffffff
7b7b7b
ffffff
7b7b7b
ffffff
7b7b7b
ffffff
`,
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
          "scale":
          `! 12-ed2 C-System Chromatic Button.scl
! 12-tone equal tempered scale consisting of 12 sonically equal divisions per frequency halving/doubling, mapped on a (hexagonal) tilted Chromatic Button System Type-C used on some button accordions.
!
Terpstra Keyboard WebApp | 12-ed2 C-System Chromatic Button
12
!
100.00000
200.00000
300.00000
400.00000
500.00000
600.00000
700.00000
800.00000
900.00000
1000.00000
1100.00000
1200.00000`,
          "names":
          `C
D♭/C♯
D
E♭/D♯
E
F
G♭/F♯
G
A♭/G♯
A
B♭/A♯
B`,
          "note_colors":
          `ffffff
7b7b7b
ffffff
7b7b7b
ffffff
ffffff
7b7b7b
ffffff
7b7b7b
ffffff
7b7b7b
ffffff
`,
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
          "scale":
          ` 7-JI Rast Maqam (Arabic) —  Eight Echos (Fourth Plagal, Byzantine) Bosanquet Wilson Terpstra.scl
! 7-tone Arabic Rast Maqam made from two disjunct Rast tetrachords according to Mansour Zalzal’s famous lute tuning as described by al-Farabi, where the ratios including prime number 11 are alterations of 3-Limit versions, coinciding with the Eight Echos or Fourth Plagal of Byzantine Psaltic Chant described misleadingly in text books as 12-10-8-12-12-10-8 using the 72 moria system of approximation, mapped on a Bosanquet / Wilson / Terpstra layout.
!
Terpstra Keyboard WebApp | 7-JI Rast Maqam / Eight Echos — Bosanquet / Wilson / Terpstra
7
!
9/8
27/22
4/3
3/2
27/16
81/44
2/1`,
          "names": `1/1
9/8
27/22
4/3
3/2
27/16
81/44`,
          "note_colors":`ffffff
ffc37d
ff9fb7
f7ffaf
f7ffaf
ffc37d
ff9fb7
`, },
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
          "scale":
          ` 12-JI-7L Jankó 6-6 Balanced Symmetric Bilinear Uniform Keyboard ~Halberstadt.scl
! 12-tone Just Intonation classic 7-Limit scale, consisting of 12 rational divisions per frequency halving/doubling with sonic distances derived from the harmonic series up to a prime limit of 7, mapped on a (hexagonal) tilted Jankó layout which can be regarded as a stacked 6-6/Balanced/Symmetric/Bilinear/Uniform Keyboard, and which approximates the 7-white/5-black Halberstadt organ layout (the classic piano keyboard).
!
Terpstra Keyboard WebApp | 12-JI-7L Jankó / 6-6/Balanced/Symmetric/Bilinear/Uniform Keyboard / ~Halberstadt
12
!
16/15
9/8
6/5
5/4
4/3
7/5
3/2
8/5
5/3
7/4
15/8
2/1`,
          "names": `1/1
16/15
9/8
6/5
5/4
4/3
7/5
3/2
8/5
5/3
7/4
15/8`,
          "note_colors":`55d455
55f4aa
55ffff
55b4ff
5555ea
aa55ff
ff55ff
ff55aa
f45555
ffaa55
ffff55
aaf455
`,},
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
          "scale":
          ` 17-JI-5L-Arabic-theoretical Bosanquet Wilson Terpstra.scl
! 17-tone Arabic theoretical scale: 5-Limit Just Intonation which is schismatic equivalent to a 17-tone 3-Limit scale generated from 12 steps descending and 4 ascending plus the fundamental, consisting of 17 rational divisions per frequency halving/doubling with sonic distances derived from the harmonic series up to a prime limit of 5, presumably used until the 8th century, mapped on a Bosanquet / Wilson / Terpstra layout.
!
Terpstra Keyboard WebApp | 17-JI-5L-Arabic-theoretical Bosanquet / Wilson / Terpstra
17
!
256/243
10/9
9/8
32/27
5/4
81/64
4/3
45/32
40/27
3/2
128/81
5/3
27/16
16/9
15/8
160/81
2/1`,
          "names": `1/1
256/243
10/9
9/8
32/27
5/4
81/64
4/3
45/32
40/27
3/2
128/81
5/3
27/16
16/9
15/8
160/81`,
          "note_colors":`f7ffaf
8fc7ef
ff9fb7
f7ffaf
8fc7ef
f7ffaf
ff9fb7
f7ffaf
8fc7ef
ff9fb7
f7ffaf
8fc7ef
f7ffaf
ff9fb7
8fc7ef
f7ffaf
ff9fb7
`,
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
          "scale":
          `! 17-JI-11L-Wilson Bosanquet Wilson Terpstra.scl
! 17-tone Just Intonation 11-Limit scale by Erv Wilson, consisting of 17 rational divisions per frequency halving/doubling with sonic distances derived from the harmonic series up to a prime limit of 11, mapped on a Bosanquet / Wilson / Terpstra layout.
! Fokblock([64/63, 56/55, 968/945, 36/35], [5, 6, 11, 6]) =
! Fokblock([64/63, 56/55, 36/35, 704/675], [5, 3, 6, 11]) ": "
! Fokblock([64/63, 968/945, 36/35, 704/675], [5, 13, 6, 6]) wakalix
Terpstra Keyboard WebApp | 17-JI-11L-Wilson Bosanquet / Wilson / Terpstra
17
!
22/21
11/10
9/8
7/6
11/9
5/4
4/3
11/8
22/15
3/2
11/7
44/27
5/3
7/4
11/6
15/8
2/1`,
          "names":
          `R
22/21
11/10
9/8
7/6
11/9
5/4
4/3
11/8
22/15
3/2
11/7
44/27
5/3
7/4
11/6
15/8`,
          "note_colors":
          `8fc7ef
f7ffaf
ffc37d
8fc7ef
f7ffaf
ffc37d
8fc7ef
8fc7ef
ffc37d
ffc37d
8fc7ef
f7ffaf
ffc37d
8fc7ef
f7ffaf
ffc37d
8fc7ef
`,
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
          "scale":
          ` 22-JI-5L-Indian Bosanquet Wilson Terpstra.scl
! 22-tone Indian scale: 5-Limit Just Intonation which is schismatic equivalent to a 22-tone 3-Limit scale generated from 11 steps ascending and 10 descending plus the fundamental, consisting of 22 rational divisions per frequency halving/doubling with sonic distances derived from the harmonic series up to a prime limit of 5, notated after Alain Daniélou, having as reference frequency the Earth's year transposed 33 octaves higher, mapped on a Bosanquet / Wilson / Terpstra layout.
!
Terpstra Keyboard WebApp | 22-JI-5L-Indian Bosanquet / Wilson / Terpstra
22
!
256/243
16/15
10/9
9/8
32/27
6/5
5/4
81/64
4/3
27/20
45/32
64/45
3/2
128/81
8/5
5/3
27/16
16/9
9/5
15/8
243/128
2/1`,
          "names":
          `Sa
ReL-
ReL+
Re-
Re
GaL
Gab
Ga
Ga+
Ma
Ma+
MaL-
MaL+
Pa
DhaL
Dhab
Dha
Dha+
NiL+
Nib
Ni
Ni+`,
          "note_colors":
          `80df80
80cfff
ffbfff
ffcf80
80df80
80cfff
ffbfff
80df80
ffcf80
80df80
ffcf80
80cfff
ffbfff
80df80
80cfff
ffbfff
ffcf80
80df80
80cfff
ffbfff
80df80
ffcf80
`,
        },
        "name":  "22-JI-5L-Indian Bosanquet / Wilson / Terpstra"
      },

      { value: {
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
        "scale":
        ` 31-JI-7L-Fokker Bosanquet Wilson Terpstra.scl
! 31-tone Just Intonation 7-Limit scale by Adriaan Fokker, consisting of 31 rational divisions per frequency halving/doubling with sonic distances derived from the harmonic series up to a prime limit of 7, mapped on a Bosanquet / Wilson / Terpstra layout.
!
Terpstra Keyboard WebApp | 31-JI-7L-Fokker Bosanquet / Wilson / Terpstra
31
!
64/63
135/128
15/14
35/32
9/8
8/7
7/6
135/112
315/256
5/4
9/7
21/16
4/3
175/128
45/32
10/7
35/24
3/2
32/21
14/9
45/28
105/64
5/3
12/7
7/4
16/9
945/512
15/8
40/21
63/32
2/1`,
        "names": `1/1
64/63
135/128
15/14
35/32
9/8
8/7
7/6
135/112
315/256
5/4
9/7
21/16
4/3
175/128
45/32
10/7
35/24
3/2
32/21
14/9
45/28
105/64
5/3
12/7
7/4
16/9
945/512
15/8
40/21
63/32`,
        "note_colors":`ffffff
ff9f41
cfcfcf
bbaa93
7b7b7b
ffffff
ff9f41
cfcfcf
bbaa93
7b7b7b
ffffff
bbaa93
cfcfcf
ffffff
ff9f41
cfcfcf
bbaa93
7b7b7b
ffffff
ff9f41
cfcfcf
bbaa93
7b7b7b
ffffff
ff9f41
cfcfcf
bbaa93
7b7b7b
ffffff
bbaa93
cfcfcf
ffffff
`,
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
          "scale":
          ` 43-JI-11L-Partch Bosanquet Wilson Terpstra.scl
! 43-tone Just Intonation 11-Limit scale by Harry Partch, consisting of 43 rational divisions per frequency halving/doubling with sonic distances derived symmetrically from both ascending and descending harmonic series (otonalities and utonalities) up to a prime limit of 11, mapped on a Bosanquet / Wilson / Terpstra layout.
!
Terpstra Keyboard WebApp | 43-JI-11L-Partch Bosanquet / Wilson / Terpstra
43
!
81/80
33/32
21/20
16/15
12/11
11/10
10/9
9/8
8/7
7/6
32/27
6/5
11/9
5/4
14/11
9/7
21/16
4/3
27/20
11/8
7/5
10/7
16/11
40/27
3/2
32/21
14/9
11/7
8/5
18/11
5/3
27/16
12/7
7/4
16/9
9/5
20/11
11/6
15/8
40/21
64/33
160/81
2/1`,
          "names": `1/1
81/80
33/32
21/20
16/15
12/11
11/10
10/9
9/8
8/7
7/6
32/27
6/5
11/9
5/4
14/11
9/7
21/16
4/3
27/20
11/8
7/5
10/7
16/11
40/27
3/2
32/21
14/9
11/7
8/5
18/11
5/3
27/16
12/7
7/4
16/9
9/5
20/11
11/6
15/8
40/21
64/33
160/81`,
          "note_colors":`
`,
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
          "scale":
          ` 53-RI-3L Bosanquet Wilson Terpstra Male (Western).scl
! 53-tone Rational Intonation 3-Limit scale, consisting of 53 rational divisions per frequency halving/doubling with sonic distances derived solely from the harmonics 2 and 3 of both ascending and descending harmonic series, mapped on a Bosanquet / Wilson / Terpstra Male (Western) layout.
!
Terpstra Keyboard WebApp | 53-RI-3L Bosanquet / Wilson / Terpstra Male (Western)
53
!
531441/524288
282429536481/274877906944
134217728/129140163
256/243
2187/2048
1162261467/1073741824
34359738368/31381059609
65536/59049
9/8
4782969/4194304
2541865828329/2199023255552
16777216/14348907
32/27
19683/16384
10460353203/8589934592
4294967296/3486784401
8192/6561
81/64
43046721/33554432
1099511627776/847288609443
2097152/1594323
4/3
177147/131072
94143178827/68719476736
536870912/387420489
1024/729
729/512
387420489/268435456
137438953472/94143178827
262144/177147
3/2
1594323/1048576
847288609443/549755813888
67108864/43046721
128/81
6561/4096
3486784401/2147483648
17179869184/10460353203
32768/19683
27/16
14348907/8388608
4398046511104/2541865828329
8388608/4782969
16/9
59049/32768
31381059609/17179869184
2147483648/1162261467
4096/2187
243/128
129140163/67108864
549755813888/282429536481
1048576/531441
2/1`,
          "names": `2⁰|3⁰
2¹⁹|3¹²
2³⁸|3²⁴
3¹⁷|2²⁷
3⁵|2⁸
2¹¹|3⁷
2³⁰|3¹⁹
3²²|2³⁵
3¹⁰|2¹⁶
2³|3²
2²²|3¹⁴
2⁴¹|3²⁶
3¹⁵|2²⁴
3³|2⁵
2¹⁴|3⁹
2³³|3²¹
3²⁰|2³²
3⁸|2¹³
2⁶|3⁴
2²⁵|3¹⁶
3²⁵|2⁴⁰
3¹³|2²¹
3¹|2²
2¹⁷|3¹¹
2³⁶|3²³
3¹⁸|2²⁹
3⁶|2¹⁰
2⁹|3⁶
2²⁸|3¹⁸
3²³|2³⁷
3¹¹|2¹⁸
2¹|3¹
2²⁰|3¹³
2³⁹|3²⁵
3¹⁶|2²⁶
3⁴|2⁷
2¹²|3⁸
2³¹|3²⁰
3²¹|2³⁴
3⁹|2¹⁵
2⁴|3³
2²³|3¹⁵
3²⁶|2⁴²
3¹⁴|2²³
3²|2⁴
2¹⁵|3¹⁰
2³⁴|3²²
3¹⁹|2³¹
3⁷|2¹²
2⁷|3⁵
2²⁶|3¹⁷
3²⁴|2³⁹
3¹²|2²⁰
3⁰|2¹`,
          "note_colors":`ffffff
c3b7ab
e7e7e7
878787
ff9f40
878787
ff9f40
e7e7e7
abb7c3
ffffff
c3b7ab
e7e7e7
878787
ff9f40
878787
ff9f40
e7e7e7
abb7c3
ffffff
c3b7ab
e7e7e7
abb7c3
ffffff
c3b7ab
e7e7e7
878787
ff9f40
878787
ff9f40
e7e7e7
abb7c3
ffffff
c3b7ab
e7e7e7
878787
ff9f40
878787
ff9f40
e7e7e7
abb7c3
ffffff
c3b7ab
e7e7e7
878787
ff9f40
878787
ff9f40
e7e7e7
abb7c3
ffffff
c3b7ab
e7e7e7
abb7c3
`,},
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
          "scale":
          ` 53-RI-3L Bosanquet Wilson Terpstra Female (Eastern).scl
! 53-tone Rational Intonation 3-Limit scale, consisting of 53 rational divisions per frequency halving/doubling with sonic distances derived solely from the harmonics 2 and 3 of both ascending and descending harmonic series, mapped on a Bosanquet / Wilson / Terpstra Female (Eastern) layout.
!
Terpstra Keyboard WebApp | 53-RI-3L Bosanquet / Wilson / Terpstra Female (Eastern)
53
!
531441/524288
282429536481/274877906944
134217728/129140163
256/243
2187/2048
1162261467/1073741824
34359738368/31381059609
65536/59049
9/8
4782969/4194304
2541865828329/2199023255552
16777216/14348907
32/27
19683/16384
10460353203/8589934592
4294967296/3486784401
8192/6561
81/64
43046721/33554432
1099511627776/847288609443
2097152/1594323
4/3
177147/131072
94143178827/68719476736
536870912/387420489
1024/729
729/512
387420489/268435456
137438953472/94143178827
262144/177147
3/2
1594323/1048576
847288609443/549755813888
67108864/43046721
128/81
6561/4096
3486784401/2147483648
17179869184/10460353203
32768/19683
27/16
14348907/8388608
4398046511104/2541865828329
8388608/4782969
16/9
59049/32768
31381059609/17179869184
2147483648/1162261467
4096/2187
243/128
129140163/67108864
549755813888/282429536481
1048576/531441
2/1`,
          "names": `2⁰|3⁰
2¹⁹|3¹²
2³⁸|3²⁴
3¹⁷|2²⁷
3⁵|2⁸
2¹¹|3⁷
2³⁰|3¹⁹
3²²|2³⁵
3¹⁰|2¹⁶
2³|3²
2²²|3¹⁴
2⁴¹|3²⁶
3¹⁵|2²⁴
3³|2⁵
2¹⁴|3⁹
2³³|3²¹
3²⁰|2³²
3⁸|2¹³
2⁶|3⁴
2²⁵|3¹⁶
3²⁵|2⁴⁰
3¹³|2²¹
3¹|2²
2¹⁷|3¹¹
2³⁶|3²³
3¹⁸|2²⁹
3⁶|2¹⁰
2⁹|3⁶
2²⁸|3¹⁸
3²³|2³⁷
3¹¹|2¹⁸
2¹|3¹
2²⁰|3¹³
2³⁹|3²⁵
3¹⁶|2²⁶
3⁴|2⁷
2¹²|3⁸
2³¹|3²⁰
3²¹|2³⁴
3⁹|2¹⁵
2⁴|3³
2²³|3¹⁵
3²⁶|2⁴²
3¹⁴|2²³
3²|2⁴
2¹⁵|3¹⁰
2³⁴|3²²
3¹⁹|2³¹
3⁷|2¹²
2⁷|3⁵
2²⁶|3¹⁷
3²⁴|2³⁹
3¹²|2²⁰
3⁰|2¹`,
          "note_colors":`ffffff
c3b7ab
e7e7e7
878787
ff9f40
878787
ff9f40
e7e7e7
abb7c3
ffffff
c3b7ab
e7e7e7
878787
ff9f40
878787
ff9f40
e7e7e7
abb7c3
ffffff
c3b7ab
e7e7e7
abb7c3
ffffff
c3b7ab
e7e7e7
878787
ff9f40
878787
ff9f40
e7e7e7
abb7c3
ffffff
c3b7ab
e7e7e7
878787
ff9f40
878787
ff9f40
e7e7e7
abb7c3
ffffff
c3b7ab
e7e7e7
878787
ff9f40
878787
ff9f40
e7e7e7
abb7c3
ffffff
c3b7ab
e7e7e7
abb7c3
`,
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
          "scale":
          ` 19-ed2 Bosanquet Wilson Terpstra.scl
! 19-tone equal tempered scale consisting of 12 sonically equal divisions per frequency halving/doubling, mapped on a Bosanquet / Wilson / Terpstra layout.
!
Terpstra Keyboard WebApp | 19-ed2 Bosanquet / Wilson / Terpstra
19
!
63.15789
126.31579
189.47368
252.63158
315.78947
378.94737
442.10526
505.26316
568.42105
631.57895
694.73684
757.89474
821.05263
884.21053
947.36842
1010.52632
1073.68421
1136.84211
1200.00000`,
          "names": `C
C♯
D♭
D
D♯
E♭
E
E♯/F♭
F
F♯
G♭
G
G♯
A♭
A
A♯
B♭
B
B♯/C♭`,
          "note_colors":`ffffff
7fbfd4
ff9f40
ffffff
7fbfd4
ff9f40
ffffff
bfaf8a
ffffff
7fbfd4
ff9f40
ffffff
7fbfd4
ff9f40
ffffff
7fbfd4
ff9f40
ffffff
bfaf8a
`,
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
          "scale":
          ` 31-ed2 Bosanquet Wilson Terpstra.scl
! 31-tone equal tempered scale consisting of 31 sonically equal divisions per frequency halving/doubling in standard meantone notation, mapped on a Bosanquet / Wilson / Terpstra layout.
!
Terpstra Keyboard WebApp | 31-ed2 Bosanquet / Wilson / Terpstra
31
!
38.70968
77.41935
116.12903
154.83871
193.54839
232.25806
270.96774
309.67742
348.38710
387.09677
425.80645
464.51613
503.22581
541.93548
580.64516
619.35484
658.06452
696.77419
735.48387
774.19355
812.90323
851.61290
890.32258
929.03226
967.74194
1006.45161
1045.16129
1083.87097
1122.58065
1161.29032
1200.00000`,
          "names": `C
D♭♭
C♯
D♭
C×
D
E♭♭
D♯
E♭
D×
E
F♭
E♯
F
G♭♭
F♯
G♭
F×
G
A♭♭
G♯
A♭
G×
A
B♭♭
A♯
B♭
A×
B
C♭
B♯`,
          "note_colors":`ffffff
ff9f41
cfcfcf
bbaa93
7b7b7b
ffffff
ff9f41
cfcfcf
bbaa93
7b7b7b
ffffff
bbaa93
cfcfcf
ffffff
ff9f41
cfcfcf
bbaa93
7b7b7b
ffffff
ff9f41
cfcfcf
bbaa93
7b7b7b
ffffff
ff9f41
cfcfcf
bbaa93
7b7b7b
ffffff
bbaa93
cfcfcf
ffffff
`,
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
          "scale":
          ` 41-ed2 Bosanquet Wilson Terpstra.scl
! 41-tone equal tempered scale consisting of 41 sonically equal divisions per frequency halving/doubling, mapped on a Bosanquet / Wilson / Terpstra layout.
!
Terpstra Keyboard WebApp | 41-ed2 Bosanquet / Wilson / Terpstra
41
!
29.26829
58.53659
87.80488
117.07317
146.34146
175.60976
204.87805
234.14634
263.41463
292.68293
321.95122
351.21951
380.48780
409.75610
439.02439
468.29268
497.56098
526.82927
556.09756
585.36585
614.63415
643.90244
673.17073
702.43902
731.70732
760.97561
790.24390
819.51220
848.78049
878.04878
907.31707
936.58537
965.85366
995.12195
1024.39024
1053.65854
1082.92683
1112.19512
1141.46341
1170.73171
1200.00000`,
          "names": `0/41
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40",
"note_colors": "ffffff
c3b7ab
878787
ff9f40
878787
ff9f40
abb7c3
ffffff
c3b7ab
878787
ff9f40
878787
ff9f40
abb7c3
ffffff
c3b7ab
abb7c3
ffffff
c3b7ab
878787
ff9f40
878787
ff9f40
abb7c3
ffffff
c3b7ab
878787
ff9f40
878787
ff9f40
abb7c3
ffffff
c3b7ab
878787
ff9f40
878787
ff9f40
abb7c3
ffffff
c3b7ab
abb7c3
`,
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
          "scale":
          `! 12-Stretched_inharmonic6=harmonic7 Jankó 6-6 Balanced Symmetric Bilinear Uniform Keyboard ~Halberstadt.scl
! 12 stretched tones derived from an inharmonic timbre whose inharmonic 6 has same frequency as natural harmonic 7 (to be played with the "WMRI inharmonic 6 = harmonic 7" Study Tone for Total Resonance), mapped on a (hexagonal) tilted Jankó layout which can be regarded as a stacked 6-6/Balanced/Symmetric/Bilinear/Uniform Keyboard, and which approximates the 7-white/5-black Halberstadt organ layout (the classic piano keyboard).
!
12 Stretched inharmonic 6 ": " harmonic 7 - Jankó / 6-6/Balanced/Symmetric/Bilinear/Uniform Keyboard / ~Halberstadt | Terpstra Keyboard WebApp
12
!
121.343877739977
221.453017928099
342.796895668076
419.549492796989
540.893370536965
641.002510725088
762.346388465064
883.690266205042
960.442863333955
1081.786741073930
1181.895881262050
1303.239759002030",
"names": "log₆7
(16/15)ⁿ
(9/8)ⁿ
(6/5)ⁿ
(5/4)ⁿ
(4/3)ⁿ
(45/32)ⁿ
(3/2)ⁿ
(8/5)ⁿ
(5/3)ⁿ
(16/9)ⁿ
(15/8)ⁿ`,
          "note_colors":`ffffff
7b7b7b
ffffff
7b7b7b
ffffff
ffffff
7b7b7b
ffffff
7b7b7b
ffffff
7b7b7b
ffffff
`,
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
          "scale":
          `! 12-Compressed-inharmonic7=harmonic6 Jankó 6-6 Balanced Symmetric Bilinear Uniform Keyboard ~Halberstadt.scl
! 12 compressed tones derived from an inharmonic timbre whose inharmonic 7 has same frequency as natural harmonic 6 (to be played with the "WMRI inharmonic 7 = harmonic 6" Study Tone for Total Resonance), mapped on a (hexagonal) tilted Jankó layout which can be regarded as a stacked 6-6/Balanced/Symmetric/Bilinear/Uniform Keyboard, and which approximates the 7-white/5-black Halberstadt organ layout (the classic piano keyboard).
!
12 Compressed inharmonic 7 ": " harmonic 6 - Jankó / 6-6/Balanced/Symmetric/Bilinear/Uniform Keyboard / ~Halberstadt | Terpstra Keyboard WebApp
12
!
102.880181023946
187.756704310729
290.636885334675
355.710799517650
458.590980541597
543.467503828379
646.347684852326
749.227865876272
814.301780059247
917.181961083193
1002.058484369980
1104.938665393920`,
          "names": `log₇6
(16/15)
(9/8)
(6/5)
(5/4)
(4/3)
(45/32)
(3/2)
(8/5)
(5/3)
(16/9)
(15/8)`,
          "note_colors":`ffffff
7b7b7b
ffffff
7b7b7b
ffffff
ffffff
7b7b7b
ffffff
7b7b7b
ffffff
7b7b7b
ffffff
`,
        },
        "name":  "12-Compressed inharmonic 7 & harmonic 6 - Jankó / ..."
      },
    ]
  },
];

export default presets;

export const default_settings = presets[0].settings[0].value;
