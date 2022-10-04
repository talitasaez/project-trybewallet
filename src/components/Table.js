import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenses } from '../redux/actions';

class Table extends Component {
  handleClick = (id) => {
    const { expenses, rmvExpense } = this.props;
    const filterRemove = expenses.filter((expense) => expense.id !== id);
    rmvExpense(filterRemove);
  };

  render() {
    const { expenses } = this.props;
    console.log(expenses);
    // const { description, tag, method, currency, exchangeRates, value } = expenses;

    return (
      <table>
        <thead>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{Number(expense.value).toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>
                {(Number(expense.value)
         * Number(expense.exchangeRates[expense.currency].ask))
                  .toFixed(2)}

              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.handleClick(expense.id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  rmvExpense: (id) => dispatch(removeExpenses(id)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
  rmvExpense: PropTypes.arrayOf.isRequired,

};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
