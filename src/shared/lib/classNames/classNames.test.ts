import { classNames } from './classNames';

describe('classNames helper', () => {
  const mods = {
    'enabledClass': true,
    'disabledClass': false,
    'someClass': true
  };
  const additional = ['test1', 'test2', 'test3'];

  test('cls test', () => {
    expect(classNames('test')).toBe('test');
  });

  test('mods test', () => {
    expect(classNames('', mods)).toBe(' enabledClass someClass');
  });

  test('additional test', () => {
    expect(classNames('', {}, additional)).toBe(' test1 test2 test3');
  });

  test('clas mods', () => {
    expect(classNames('cls', mods)).toBe('cls enabledClass someClass');
  });

  test('cls additional', () => {
    expect(classNames('cls', {}, additional)).toBe('cls test1 test2 test3');
  });

  test('cls mods additional', () => {
    expect(
      classNames('cls', mods, additional)
    ).toBe('cls test1 test2 test3 enabledClass someClass');
  });
});
