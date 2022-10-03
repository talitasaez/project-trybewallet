// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_API = 'REQUEST_API';

export const userLoginAction = (payload) => ({ type: USER_LOGIN, payload });
export const requestApi = (payload) => ({ type: REQUEST_API, payload });

export const fetchApi = () => async (dispatch) => {
  const api = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await api.json();
  const arrayCoins = Object.keys(data).filter((element) => element !== 'USDT');
  dispatch(requestApi(arrayCoins));
};
