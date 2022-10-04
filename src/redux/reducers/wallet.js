import { REQUEST_API, ADD_EXPENSES, REMOVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return { ...state, currencies: [...action.payload] };

  case ADD_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, {
        id: action.payload.id,
        value: action.payload.value,
        description: action.payload.description,
        currency: action.payload.currency,
        method: action.payload.method,
        tag: action.payload.tag,
        exchangeRates: action.payload.exchangeRates,
      }] };

  case REMOVE_EXPENSES:
    return { ...state, expenses: [...action.id] };
  default:
    return state;
  }
};

export default wallet;
