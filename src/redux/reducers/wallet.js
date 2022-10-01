import { REQUEST_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  isLoading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API: {
    return { ...state, isloading: true };
  }
  default:
    return state;
  }
};

export default wallet;
