import React, { Component } from 'react';
import { connect } from 'react-redux';

class WalletForm extends Component {
  state = {
    valueInput: '',
    description: '',
    currencyInput: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  render() {
    const {
      valueInput,
      description,
      currencyInput,
      method,
      tag,
    } = this.setState;

    return (
      <div>
        <label htmlFor="valueInput">
          Valor:
          <input
            type="number"
            name="valueInput"
            data-testid="value-input"
            value={ valueInput }
            // {/* onChange={} */}
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            data-testid="description-input"
            value={ description }
            // {/* onChange={} */}
          />
        </label>
        <label htmlFor="currencyInput">
          Moeda
          <select
            name="currencyInput"
            data-testid="currency-input"
            id="currencyInput"
            value={ currencyInput }
          />
        </label>
        <label htmlFor="method">
          Método de Pagamento
          <select
            name="method"
            id="method"
            data-testid="method-input"
            value={ method }
            // {/* onChange={} */}
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
            // {/* onChange={} */}
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>

        </label>
      </div>
    );
  }
}

export default connect()(WalletForm);
