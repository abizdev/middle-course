import { loginState, selectError, selectIsLoading, selectPassword, selectUsername } from './login-selector';
import { StateSchema } from 'app/providers/store-provider';

describe('login by username test', () => {
  const state: StateSchema = {
    counter: { value: 10 },
    user: {},
    login: { username: 'admin', password: '123', isLoading: false, error: 'error' },
  }

  test('loginState', () => {
    expect(loginState(state)).toEqual(state.login);
  });

  test('username', () => {
    expect(selectUsername(state)).toBe('admin');
  });

  test('password', () => {
    expect(selectPassword(state)).toBe('123');
  });

  test('loading', () => {
    expect(selectIsLoading(state)).toBe(false);
  });

  test('error', () => {
    expect(selectError(state)).toBe('error');
  });

  test('empty state', () => {
    const loginState = {
      counter: { value: 10 },
      user: {},
      login: {username: 'admin', password: '123', isLoading: false,}
    }
    expect(selectError(loginState)).toBe(undefined);
  })
});
