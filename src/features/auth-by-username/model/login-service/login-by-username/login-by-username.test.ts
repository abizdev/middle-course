// import axios from 'axios';
// import { loginByUsername } from './login-by-username';
// import { Dispatch } from '@reduxjs/toolkit';
// import { DynamicReducers } from 'app/providers/store-provider';
// import { userActions } from 'entities/user';
// import { TestAsyncThunk } from 'shared/lib';
//
// jest.mock('axios');
// const mockedAxios = jest.mocked(axios, { shallow: true });
//
// describe('LoginByUsernameTest', () => {
//   let dispatch: Dispatch;
//   let getState: () => DynamicReducers;
//
//   beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
//   });
//
//   test('success login', async () => {
//     const userValue = { username: 'admin', id: '1' };
//     const thunk = new TestAsyncThunk(loginByUsername);
//     // thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
//     const result = await thunk.callThunk({ username: 'admin', password: '123' });
//
//     expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
//     expect(thunk.dispatch).toHaveBeenCalledTimes(3);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe('fulfilled');
//   });
//
//   test('error login', async () => {
//     // mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
//     const thunk = new TestAsyncThunk(loginByUsername);
//     const result = await thunk.callThunk({ username: 'admin', password: '123' });
//
//     expect(thunk.dispatch).toHaveBeenCalledTimes(2);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe('rejected');
//   });
// });
