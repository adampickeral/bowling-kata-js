import { Main } from '../transpiled/main';

describe('Main', () => {
  var main;

  beforeEach(() => {
    main = new Main();
  });

  it('adds up a simple game', () => {
    expect(main.calculate('12345123451234512345')).toEqual(60);
  });

  it('handles gutter balls', () => {
    expect(main.calculate('1-3451234512345-2345')).toEqual(57);
  });

  it('calculates a heartbreak', () => {
    expect(main.calculate('9-9-9-9-9-9-9-9-9-9-')).toEqual(90);
  });

  it('handles a spare', () => {
    expect(main.calculate('1/345123451234512345')).toEqual(70);
  });

  it('handles a spare again', () => {
    expect(main.calculate('1/345/23451234512345')).toEqual(76);
  });

  it('handles consecutive spares', () => {
    expect(main.calculate('1/3/5/23451234512345')).toEqual(84);
  });

  it('calculates a spare every round', () => {
    expect(main.calculate('5/5/5/5/5/5/5/5/5/5/5')).toEqual(150);
  });

  it('handles a strike', () => {
    expect(main.calculate('x345123451234512345')).toEqual(74);
  });

  it('handles consecutive strikes', () => {
    expect(main.calculate('xx5123451234512345')).toEqual(91);
  });

  it('calculates perfect game', () => {
    expect(main.calculate('xxxxxxxxxxxx')).toEqual(300);
  });

  it('calculates a mix of spares, strikes, and gutters', () => {
    expect(main.calculate('1/3/5/-3x1234x2/x9/')).toEqual(124);
  });

  it('calculates an ending turkey', () => {
    expect(main.calculate('1/3/5/-3x1234x2/xxx')).toEqual(134);
  });

  it('calculates a spare followed by a strike', () => {
    expect(main.calculate('1/3/5/-3x1/xx2/xxx')).toEqual(173);
  });

  it('calculates a strike, all spares, final strike', () => {
    expect(main.calculate('x9/9/9/9/9/9/9/9/9/x')).toEqual(192);
  });

  it('calculates all gutters', () => {
    expect(main.calculate('--------------------')).toEqual(0);
  });

  it('throws an error for an invalid roll', () => {
    expect(() => { main.calculate('11//9/9/9/9/9/9/9/9/x'); }).toThrow(new Error('Invalid Roll'));
  });

  it('throws an error for another invalid roll', () => {
    expect(() => { main.calculate('x//9/9/9/9/9/9/9/9/x'); }).toThrow(new Error('Invalid Roll'));
  });
});
