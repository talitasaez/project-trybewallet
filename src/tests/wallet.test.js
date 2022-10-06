import React from 'react';
import { screen, act } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('teste o app', () => {
  it('verifica se possui o texto email na tela inicial', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByText(/email/i);
    expect(email).toBeInTheDocument();
  });

  it('verifica se possui o texto password na tela inicial', () => {
    renderWithRouterAndRedux(<App />);
    const password = screen.getByText(/senha/i);
    expect(password).toBeInTheDocument();
  });

  it('testar email-input e passaword-input', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(/email-input/i);
    const inputPassword = screen.getByTestId(/password-input/i);
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  test('Teste se a aplicação se o Header aparece renderizado na tela carteira.', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => { history.push('/carteira'); });
    const headingTrybe = screen.getByRole('heading', { name: 'TrybeWallet', level: 1 });
    expect(headingTrybe).toBeInTheDocument();
  });

  test('Teste se a aplicação se o input do email aparece renderizado na tela carteira.', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => { history.push('/carteira'); });
    const emailCarteira = screen.getByTestId('email-field');
    expect(emailCarteira).toBeInTheDocument();
  });

  test('Teste se a aplicação tem o botao habilitado.', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => { history.push('/carteira'); });
    const buttonAdicionar = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(buttonAdicionar).toBeInTheDocument();
  });
});
