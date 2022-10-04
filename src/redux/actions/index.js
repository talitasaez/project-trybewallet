// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

export const userLoginAction = (payload) => ({ type: USER_LOGIN, payload });
export const requestApi = (payload) => ({ type: REQUEST_API, payload });
export const addExpenses = (payload) => ({ type: ADD_EXPENSES, payload });
export const removeExpenses = (id) => ({ type: REMOVE_EXPENSES, id });

export const fetchApi = () => async (dispatch) => {
  const api = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await api.json();
  const arrayCoins = Object.keys(data).filter((element) => element !== 'USDT');
  dispatch(requestApi(arrayCoins));
};
export const fetchExpenses = (state) => async (dispatch) => {
  const api = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await api.json();
  const newData = { ...state, exchangeRates: data };
  console.log(newData);
  dispatch(addExpenses(newData));
};
