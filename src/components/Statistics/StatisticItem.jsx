import propTypes from 'prop-types';
import css from './Statistics.module.css'

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

export const StatisticItem = ({ dataItem: { label, percentage } }) => {
     
    return (
        
    <li style={{ backgroundColor :  getRandomHexColor () }} className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
    
    )
}

StatisticItem.propTypes = {
    dataItem: propTypes.shape({
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
  }).isRequired,
}