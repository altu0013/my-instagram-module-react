import React from 'react';
import profile from '../img/profile.png';

const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="user-image">
        <img src={profile} alt="caner altun" className="profile-img" />
        <p className="username">caneraltunn</p>
      </div>
      <i className="fas fa-ellipsis-v"></i>
    </div>
  );
};

export default UserInfo;