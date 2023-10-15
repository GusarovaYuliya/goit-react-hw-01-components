import propTypes from 'prop-types';
import css from './FriendList.module.css';
import {FriendListItem} from './FriendListItem';

export const FriendList = ({friends}) => {
return (
    <ul className={css.friendList}>
     {friends.map(friend => (
     <FriendListItem
     key={friend.id}
     friend={friend} />   
   ))}
    </ul>
);
}
   

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ).isRequired,
}