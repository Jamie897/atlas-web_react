import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest, LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest action creator', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS actions on successful API call', async () => {
    const email = 'test@example.com';
    const password = 'password';
    fetchMock.getOnce('/login-success.json', { body: {}, status: 200 });

    const expectedActions = [
      { type: LOGIN, user: { email, password } },
      { type: LOGIN_SUCCESS },
    ];
    const store = mockStore({});

    await store.dispatch(loginRequest(email, password));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches LOGIN and LOGIN_FAILURE actions on failed API call', async () => {
    const email = 'test@example.com';
    const password = 'password';
    fetchMock.getOnce('/login-success.json', { body: {}, status: 500 });

    const expectedActions = [
      { type: LOGIN, user: { email, password } },
      { type: LOGIN_FAILURE },
    ];
    const store = mockStore({});

    await store.dispatch(loginRequest(email, password));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
