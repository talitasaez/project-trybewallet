import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('teste o app', () => {
  it('verifica se possui o texto email na tela inicial', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const email = screen.getByText(/email/i);
    const password = screen.getByText(/senha/i);
    const buttonAdicionar = screen.getByRole('button', { name: /entrar/i });
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    userEvent.type(email, 'tltsaez@gmail.com');
    userEvent.type(password, '12345');
    expect(buttonAdicionar).toBeDisabled();
    userEvent.type(password, '123456');
    expect(buttonAdicionar).not.toBeDisabled();
    userEvent.click(buttonAdicionar);
    expect(history.location.pathname).toBe('/carteira');
  });

  it('testa a rota da pagina, deve ser uma url ', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    expect(history.location.pathname).toBe('/');
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

  test('Teste se a aplicação se a descricao aparece renderizado na tela carteira.', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => { history.push('/carteira'); });
    const descricao = screen.getByRole('columnheader', { name: /descrição/i });
    expect(descricao).toBeInTheDocument();
  });
});
