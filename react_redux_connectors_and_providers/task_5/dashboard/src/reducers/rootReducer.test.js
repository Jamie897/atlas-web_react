import rootReducer from './rootReducer';
import { Map } from 'immutable';

describe('rootReducer', () => {
  it('should initialize with a correct default state', () => {
    const action = { type: '@@INIT' };
    const initialState = rootReducer(undefined, action);

    expect(initialState.get('courses').equals(Map())).toBe(true);
    expect(initialState.get('notifications').equals(Map())).toBe(true);
    expect(initialState.get('ui').equals(Map())).toBe(true);
  });
});
