import { Mortality } from "../src/mortality";

describe('Mortality', () => {
  let newMortality;
  beforeEach(() => {
    newMortality = new Mortality();
  });
   

  test('should create a mortality object with difference value', () => {
    expect(newMortality.mercuryLife).toEqual(306.35999999999996);
    expect(newMortality.venusLife).toEqual(119.88000000000001);
    expect(newMortality.marsLife).toEqual(39.22);
    expect(newMortality.jupiterLife).toEqual(5.92);
    expect(newMortality.remainder).toEqual(0);
    expect(newMortality.over).toEqual(0);
  });

  test('should correctly determine the users remaining days left on mercury', () => {
    newMortality.lifeLeftOnMercury(153.17999999999998)
    expect(newMortality.remainder).toEqual(153.17999999999998);
  });

  test('should correctly determine the users remaining days left on venus', () => {
    newMortality.lifeLeftOnVenus(59.940000000000005)
    expect(newMortality.remainder).toEqual(59.940000000000005);
  });

  test('should correctly determine the users remaining days left on mars', () => {
    newMortality.lifeLeftOnMars(19.61)
    expect(newMortality.remainder).toEqual(19.61);
  });

  test('should correctly determine the users remaining days left on jupiter', () => {
    newMortality.lifeLeftOnJupiter(2.96)
    expect(newMortality.remainder).toEqual(2.96);
  });

  test('should correctly determine the users remaining days left on mercury if over age', () => {
    newMortality.lifeOverOnMercury(313.35999999999996)
    expect(newMortality.over).toEqual(7);
  });

});