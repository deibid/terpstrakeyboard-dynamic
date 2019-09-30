import { Point } from './point';

const keyCodeToCoords = {
  49 : new Point(-5, -2), // 1
  50 : new Point(-4, -2), // 2
  51 : new Point(-3, -2), // 3
  52 : new Point(-2, -2), // 4
  53 : new Point(-1, -2), // 5
  54 : new Point(0, -2), // 6
  55 : new Point(1, -2), // 7
  56 : new Point(2, -2), // 8
  57 : new Point(3, -2), // 9
  48 : new Point(4, -2), // 0
  189 : new Point(5, -2), // -
  187 : new Point(6, -2), // =

  81 : new Point(-5, -1), // Q
  87 : new Point(-4, -1), // W
  69 : new Point(-3, -1), // E
  82 : new Point(-2, -1), // R
  84 : new Point(-1, -1), // T
  89 : new Point(0, -1), // Y
  85 : new Point(1, -1), // U
  73 : new Point(2, -1), // I
  79 : new Point(3, -1), // O
  80 : new Point(4, -1), // P
  219 : new Point(5, -1), // [
  221 : new Point(6, -1), // ]

  65 : new Point(-5, 0), // A
  83 : new Point(-4, 0), // S
  68 : new Point(-3, 0), // D
  70 : new Point(-2, 0), // F
  71 : new Point(-1, 0), // G
  72 : new Point(0, 0), // H
  74 : new Point(1, 0), // J
  75 : new Point(2, 0), // K
  76 : new Point(3, 0), // L
  186 : new Point(4, 0), // ;
  222 : new Point(5, 0), // '

  90 : new Point(-5, 1), // Z
  88 : new Point(-4, 1), // X
  67 : new Point(-3, 1), // C
  86 : new Point(-2, 1), // V
  66 : new Point(-1, 1), // B
  78 : new Point(0, 1), // N
  77 : new Point(1, 1), // M
  188 : new Point(2, 1), // ,
  190 : new Point(3, 1), // .
  191 : new Point(4, 1), // /
};

export default keyCodeToCoords;
