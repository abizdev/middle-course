
import { LoginSchema } from 'features/auth-by-username';
import { loginActions, loginReducer } from 'features/auth-by-username/model/login-slice/login-slice';

describe('counter login-slice test', () => {
  const state: LoginSchema = {
    username: '',
    password: '',
    error: '',
    isLoading: false
  };

  test('set username', () => {
    expect(loginReducer(state, loginActions.setUsername('123'))).toEqual({ username: '123' });
  });

  test('set password', () => {
    expect(loginReducer(state, loginActions.setPassword('123'))).toEqual({ password: '123' });
  });
});
