import { createAction } from '../utils';

export default {
  namespace: 'app',
  state: {
    cnt: 0,
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
    add(state, { payload }) {
      return {
        ...state,
        cnt: state.cnt + payload,
      };
    },
  },
  effects: {
    * testAdd(action, { put }) {
      yield put(createAction('add')(1));
    },
  },
};
