import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  sum = () => {
    const { expenses } = this.props;
    let calculate = 0;
    console.log(expenses);
    expenses.forEach((element) => {
      const { value } = element;
      const coin = element.currency;
      const { ask } = element.exchangeRates[coin];
      calculate += Number(value * ask);
    });
    return Number(calculate).toFixed(2);
  };

  render() {
    const { email } = this.props;

    return (
      <div>
        <span data-testid="email-field">
          {email}
        </span>
        <span data-testid="total-field">
          { this.sum() }
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: propTypes.string.isRequired,
  expenses: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
