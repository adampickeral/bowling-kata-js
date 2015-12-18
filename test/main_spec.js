import { Main } from '../transpiled/main';

describe('Main', () => {
  var main;

  beforeEach(() => {
    main = new Main();
  });

  it('calculates a basic score', () => {
    expect(main.calculate('12345123451234512345')).toBe(60);
  });

  it('calculates gutter balls', () => {
    expect(main.calculate('1-3451234512345-2345')).toBe(57);
  });

  it('calculates a heartbreak', () => {
    expect(main.calculate('9-9-9-9-9-9-9-9-9-9-')).toBe(90);
  });

  it('calculates a spare', () => {
    expect(main.calculate('1/345123451234512345')).toBe(70);
  });

  it('calculates multiple spares', () => {
    expect(main.calculate('1/345/23451234512345')).toBe(76);
  });

  it('calculates consecutive spares', () => {
    expect(main.calculate('1/3/5/23451234512345')).toBe(84);
  });

  it('calculates a spare on every roll', () => {
    expect(main.calculate('5/5/5/5/5/5/5/5/5/5/5')).toBe(150);
  });

  it('calculates a strike', () => {
    expect(main.calculate('x345123451234512345')).toBe(74);
  });

  it('calculates consecutive strikes', () => {
    expect(main.calculate('xx5123451234512345')).toBe(91);
  });

  it('calculates a perfect game', () => {
    expect(main.calculate('xxxxxxxxxxxx')).toBe(300);
  });

  it('calculates a mixture of spares, gutters, and strikes', () => {
    expect(main.calculate('1/3/5/-3x1234x2/x9/')).toBe(124);
  });

  it('calculates an ending turkey', () => {
    expect(main.calculate('1/3/5/-3x1234x2/xxx')).toBe(134);
  });

  it('calculates another mixture of spares and strikes', () => {
    expect(main.calculate('1/3/5/-3x1/xx2/xxx')).toBe(173);
  });

  it('calculates a spare and strik on the last frame', () => {
    expect(main.calculate('x9/9/9/9/9/9/9/9/9/x')).toBe(192);
  });

  it('calculates all gutter balls', () => {
    expect(main.calculate('--------------------')).toBe(0);
  });

  it('throws an error when the first roll is a spare', () => {
    expect(() => { main.calculate('11//9/9/9/9/9/9/9/9/x'); }).toThrow(new Error('Invalid Roll'));
  });

  it('throws an error when the first roll after a strike is a spare', () => {
    expect(() => { main.calculate('x//9/9/9/9/9/9/9/9/x'); }).toThrow(new Error('Invalid Roll'));
  });

  it('throws an error when the first roll is not a number, strike, spare, or gutter', () => {
    expect(() => { main.calculate('xa/9/9/9/9/9/9/9/9/x'); }).toThrow(new Error('Invalid Roll'));
  });

  it('throws an error when the first roll is not a number, strike, spare, or gutter', () => {
    expect(() => { main.calculate('ax/9/9/9/9/9/9/9/9/x'); }).toThrow(new Error('Invalid Roll'));
  });

  it('throws an error when the roll after a spare is invalid', () => {
    expect(() => { main.calculate('119/a/9/9/9/9/9/9/9/x'); }).toThrow(new Error('Invalid Roll'));
  });
});
