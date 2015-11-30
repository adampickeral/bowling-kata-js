import { Main } from '../transpiled/main';

describe('Main', () => {
  it('passes a test', () => {
    var main;

    main = new Main();

    expect(main.test()).toBe(true);
  });
});
