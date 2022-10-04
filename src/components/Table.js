import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenses } from '../redux/actions';

class Table extends Component {
  render() {
    const { expenses, dispatch } = this.props;
    // const { description, tag, method, currency, exchangeRates, value } = expenses;
    expenses.map((expense) => (
      <tr key={ expense.id }>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{Number(expense.value).toFixed(2)}</td>
        <td>{expense.exchangeRates[expense.currency].name}</td>
        <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
        <td>
        Number(expense.value)
         * Number(expense.exchangeRates[expense.currency].ask))
         .toFixed(2)}</td>
        <td>Real</td>
      </tr>
    ));
    return (
      <div>
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
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  expensesId: (payload) => dispatch(addExpenses(payload)),
});

const mapStateToProps = ({ state }) => ({
  expense: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.func.isRequired,

};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
