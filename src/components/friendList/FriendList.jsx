import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
    <List>
       {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
        />
    ))}
</List>
)}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

