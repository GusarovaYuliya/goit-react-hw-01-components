import PropTypes from 'prop-types';

const TransactionItem = ({ dataTransaction }) => {
  return (
    <tr>
      <td>{dataTransaction.type}</td>
      <td>{dataTransaction.amount}</td>
      <td>{dataTransaction.currency}</td>
    </tr>
  );
};

export default TransactionItem;

TransactionItem.propTypes = {
  dataTransaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};