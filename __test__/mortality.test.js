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
  });

});