import TransactionItem from './TransactionItem';
import css from './Transactions.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ dataTransactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.hederRow}>
        <tr className={css.valuesRow}>
          <th className={css.columnHeader}>Type</th>
          <th className={css.columnHeader}>Amount</th>
          <th className={css.columnHeader}>Currency</th>
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