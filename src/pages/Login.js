import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { userLoginAction } from '../redux/actions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isBtnDisabled: true,
  };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.verifyBtn());
  };

  verifyBtn = () => {
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const numberPassword = 6;
    const verifyEmail = regex.test(email);
    const verifyPassword = password.length >= numberPassword;
    this.setState({ isBtnDisabled: !(verifyEmail && verifyPassword) });
  };

  handleBtn = (event) => {
    event.preventDefault();
    const { history, userLogin } = this.props;
    const { email } = this.state;
    userLogin(email);
    // dispatch(fetchApi());
    history.push('/carteira');
  };

  render() {
    const { email, password, isBtnDisabled } = this.state;
    return (
      <div className="login">
        <h3>Login</h3>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            data-testid="email-input"
            id="email"
            value={ email }
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="text"
            name="password"
            data-testid="password-input"
            id="password"
            value={ password }
            onChange={ this.handleInput }
          />
        </label>
        <button
          type="submit"
          onClick={ (event) => this.handleBtn(event) }
          disabled={ isBtnDisabled }
        >
          Entrar

        </button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  userLogin: (payload) => dispatch(userLoginAction(payload)),
});

Login.propTypes = {
  userLogin: propTypes.func.isRequired,
  history: propTypes.shape.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
