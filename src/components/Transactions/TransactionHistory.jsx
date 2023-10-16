import TransactionItem from './TransactionItem';
import css from './TransactionTable.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ dataTransactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {dataTransactions.map(transaction => (
          <TransactionItem key={transaction.id} dataTransaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  dataTransactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};