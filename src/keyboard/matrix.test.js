import Point from '../point';
import { calculateRotationMatrix, applyMatrixToPoint } from './matrix';

describe('Calculating rotation matrix at origin', () => {
  it.skip('rotation matrix for 0 degree rotation', () => {
    expect(calculateRotationMatrix(0, new Point(0, 0)))
      .toStrictEqual([1, 0, -0.0, 1, 0, 0]);
  });
  it.skip('rotation matrix for 60 degree rotation', () => {
    expect(calculateRotationMatrix(60 * Math.PI / 180, new Point(0, 0)))
      .toStrictEqual([
        -0.9524129804151563,
        -0.3048106211022167,
        0.3048106211022167,
        -0.9524129804151563,
        0,
        0
      ]);
  });
  it.skip('rotation matrix for 90 degree rotation', () => {
    expect(calculateRotationMatrix(90 * Math.PI / 180, new Point(0, 0)))
      .toStrictEqual([
        -0.4480736161291702,
        0.8939966636005579,
        -0.8939966636005579,
        -0.4480736161291702,
        0,
        0
      ]);
  });
  it.skip('rotation matrix for 120 degree rotation', () => {
    expect(calculateRotationMatrix(120 * Math.PI / 180, new Point(0, 0)))
      .toStrictEqual([
        0.8141809705265618,
        0.5806111842123143,
        -0.5806111842123143,
        0.8141809705265618,
        0,
        0,
      ]);
  });
  it.skip('rotation matrix for 143 degree rotation', () => {
    expect(calculateRotationMatrix(143 * Math.PI / 180, new Point(0, 0)))
      .toStrictEqual([
        0.05750252534912421,
        -0.9983453608739179,
        0.9983453608739179,
        0.05750252534912421,
        0,
        0
      ]);
  });
  it.skip('rotation matrix for 180 degree rotation', () => {
    expect(calculateRotationMatrix(Math.PI, new Point(0, 0)))
      .toStrictEqual([
        -0.5984600690578581,
        -0.8011526357338304,
        0.8011526357338304,
        -0.5984600690578581,
        0,
        0,
      ]);
  });
  it.skip('rotation matrix for 273.5672 degree rotation', () => {
    expect(calculateRotationMatrix(273.5672 * Math.PI / 180, new Point(0, 0)))
      .toStrictEqual([
        -0.9692482071439977,
        -0.2460851741737932,
        0.2460851741737932,
        -0.9692482071439977,
        0,
        0,
      ]);
  });
  test.skip('rotation matrix for 360 degree rotation', () => {
    expect(calculateRotationMatrix(2 * Math.PI, new Point(0, 0)))
      .toStrictEqual([1, 0, -0.0, 1, 0, 0]);
  });
  it.skip('rotation matrix for -273.5672 degree rotation', () => {
    expect(calculateRotationMatrix(-273.5672 * Math.PI / 180, new Point(0, 0)))
      .toStrictEqual([
        -0.9692482071439977,
        0.2460851741737932,
        -0.2460851741737932,
        -0.9692482071439977,
        0,
        0,
      ]);
  });
  it.skip('rotation matrix for -6 degree rotation', () => {
    expect(calculateRotationMatrix(-6 * Math.PI / 180, new Point(0, 0)))
      .toStrictEqual([
        0.9601702866503661,
        0.27941549819892586,
        -0.27941549819892586,
        0.9601702866503661,
        0,
        0,
      ]);
  });
  test.skip('rotation matrix for -360 degree rotation', () => {
    expect(calculateRotationMatrix(-2 * Math.PI, new Point(0, 0)))
      .toStrictEqual([1, 0, -0.0, 1, 0, 0]);
  });
  test.skip('rotation matrix for 720 degree rotation', () => {
    expect(calculateRotationMatrix(4 * Math.PI, new Point(0, 0)))
      .toStrictEqual([1, 0, -0.0, 1, 0, 0]);
  });
});

describe('Calculating rotation matrix around a point', () => {
  it.skip('rotation matrix for 0 degree rotation, point (5, -5)', () => {
    expect(calculateRotationMatrix(0, new Point(5, -5)))
      .toStrictEqual([1, 0, -0.0, 1, 0, 0]);
  });
  it.skip('rotation matrix for 0 degree rotation, point (-5, -5)', () => {
    expect(calculateRotationMatrix(0, new Point(5, -5)))
      .toStrictEqual([1, 0, -0.0, 1, 0, 0]);
  });
  it.skip('rotation matrix for 0 degree rotation, point (-5, 5)', () => {
    expect(calculateRotationMatrix(0, new Point(5, -5)))
      .toStrictEqual([1, 0, -0.0, 1, 0, 0]);
  });
  it.skip('rotation matrix for 0 degree rotation, point (5, 5)', () => {
    expect(calculateRotationMatrix(0, new Point(5, -5)))
      .toStrictEqual([1, 0, -0.0, 1, 0, 0]);
  });

  it.skip('rotation matrix for 273.387672 degree rotation, point (3.87, 8.33)', () => {
    expect(calculateRotationMatrix(273.387672 * Math.PI / 180, new Point(3.87, 8.33)))
      .toStrictEqual([
        -0.9976127757354549,
        -0.06905613433577724,
        0.06905613433577724,
        -0.9976127757354549,
        7.155523843079187,
        16.907361661755797,
      ]);
  });

  it.skip('rotation matrix for 273.387672 degree rotation, point (-3.87, 8.33)', () => {
    expect(calculateRotationMatrix(273.387672 * Math.PI / 180, new Point(-3.87, 8.33)))
      .toStrictEqual([
       -0.9976127757354549,
       -0.06905613433577724,
       0.06905613433577724,
       -0.9976127757354549,
       -8.305999041113235,
       16.37286718199688,
      ]);
  });
  it.skip('rotation matrix for 273.387672 degree rotation, point (3.87, -8.33)', () => {
    expect(calculateRotationMatrix(273.387672 * Math.PI / 180, new Point(3.87, -8.33)))
      .toStrictEqual([
       -0.9976127757354549,
       -0.06905613433577724,
       0.06905613433577724,
       -0.9976127757354549,
       8.305999041113235,
       -16.37286718199688,
      ]);
  });
  it.skip('rotation matrix for 273.387672 degree rotation, point (-3.87, -8.33)', () => {
    expect(calculateRotationMatrix(273.387672 * Math.PI / 180, new Point(-3.87, -8.33)))
      .toStrictEqual([
       -0.9976127757354549,
       -0.06905613433577724,
       0.06905613433577724,
       -0.9976127757354549,
       -7.155523843079187,
       -16.907361661755797,
      ]);
  });
  it.skip('rotation matrix for -74 degree rotation, point (5, -5)', () => {
    expect(calculateRotationMatrix(-74 * Math.PI / 180, new Point(5, -5)))
      .toStrictEqual([
       0.17171734183077755,
       0.9851462604682474,
       -0.9851462604682474,
       0.17171734183077755,
       -0.7843180114951247,
       -9.067144593187349,
      ]);

  });
  it.skip('rotation matrix for -74 degree rotation, point (-5, -5)', () => {
    expect(calculateRotationMatrix(-74 * Math.PI / 180, new Point(5, -5)))
      .toStrictEqual([
       0.17171734183077755,
       0.9851462604682474,
       -0.9851462604682474,
       0.17171734183077755,
       -0.7843180114951247,
       -9.067144593187349,
      ]);
  });
  it.skip('rotation matrix for -74 degree rotation, point (-5, 5)', () => {
    expect(calculateRotationMatrix(-74 * Math.PI / 180, new Point(5, -5)))
      .toStrictEqual([
       0.17171734183077755,
       0.9851462604682474,
       -0.9851462604682474,
       0.17171734183077755,
       -0.7843180114951247,
       -9.067144593187349,
      ]);
  });
  it.skip('rotation matrix for -74 degree rotation, point (5, 5)', () => {
    expect(calculateRotationMatrix(-74 * Math.PI / 180, new Point(5, -5)))
      .toStrictEqual([
       0.17171734183077755,
       0.9851462604682474,
       -0.9851462604682474,
       0.17171734183077755,
       -0.7843180114951247,
       -9.067144593187349,
      ]);
  });
});

describe('Applying matrix to point', () => {
  it.skip('a point with a negative rotation', () => {
    const matrix = calculateRotationMatrix(-74 * Math.PI / 180, new Point(5, -7));
    const result = applyMatrixToPoint(matrix, new Point(5, -7));
    expect(result.x).toStrictEqual(5);
    expect(result.y).toStrictEqual(-7);

    const result2 = applyMatrixToPoint(matrix, new Point(4, 66));
    expect(result2.x).toStrictEqual(-67.08739435601282);
    expect(result2.y).toStrictEqual(4.550219693178512);
  });
  it.skip('a point with a positive rotation', () => {
    const matrix = calculateRotationMatrix(60 * Math.PI / 180, new Point(5, 10));
    const result = applyMatrixToPoint(matrix, new Point(5, 10));
    expect(result.x).toStrictEqual(5);
    expect(result.y).toStrictEqual(10);

    const result2 = applyMatrixToPoint(matrix, new Point(4, 66));
    expect(result2.x).toStrictEqual(23.021807762139293);
    expect(result2.y).toStrictEqual(-43.03031628214654);
  });
  it.skip('a point with no rotation', () => {
    const matrix = calculateRotationMatrix(0, new Point(0, 0));
    const result = applyMatrixToPoint(matrix, new Point(5, 6));
    expect(result.x).toStrictEqual(5);
    expect(result.y).toStrictEqual(6);
  });
});
