// requisito 7 feito com a ajuda da colega Valéria Menezes;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi, fetchExpenses } from '../redux/actions';
// import { fetchApi } from '../redux/actions';
class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { fetchCoins } = this.props;
    fetchCoins();
  }

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { fetchEx } = this.props;
    fetchEx(this.state);
    this.setState((e) => ({
      id: e.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  };

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const { coins } = this.props;
    return (
      <div>
        <form onChange={ this.handleInput }>
          <label htmlFor="valueInput">
            Valor:
            <input
              type="number"
              name="value"
              data-testid="value-input"
              value={ value }
              // onChange={ this.handleInput }

            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              name="description"
              data-testid="description-input"
              value={ description }
              onChange={ this.handleInput }
            />
          </label>
          <label htmlFor="currencyInput">
            Moeda
            <select
              name="currency"
              data-testid="currency-input"
              id="currencyInput"
              value={ currency }
            // onChange={ this.handleInput }
            >
              {coins.map((coin) => <option key={ coin }>{coin}</option>)}
            </select>

          </label>
          <label htmlFor="method">
            Método de Pagamento
            <select
              name="method"
              id="method"
              data-testid="method-input"
              value={ method }
            // onChange={ this.handleInput }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>

          </label>
          <label htmlFor="tag">
            Categoria
            <select
              name="tag"
              data-testid="tag-input"
              id="tag"
              value={ tag }
            // onChange={ this.handleInput }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>

          </label>
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa

          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCoins: (payload) => dispatch(fetchApi(payload)),
  // expensesId: (payload) => dispatch(addExpenses(payload)),
  fetchEx: (payload) => dispatch(fetchExpenses(payload)),
});

const mapStateToProps = ({ wallet }) => ({
  coins: wallet.currencies,
});

WalletForm.propTypes = {
  coins: PropTypes.arrayOf.isRequired,
  fetchCoins: PropTypes.func.isRequired,
  fetchEx: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
