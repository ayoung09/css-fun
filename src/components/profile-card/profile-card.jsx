import React, { Component } from 'react';
import css from './profile-card.css';
import profilePic from '../../images/pusheen_cookie.jpg';

class ProfileCard extends Component {
  render() {
    return (
      <div style={{ ...this.props.style }} className={css.profileCard}>
        <div className={css.headerImage} />
        <div className={css.profileTile}>
          <img src={profilePic} className={css.profilePic} alt="pusheen eating cookie" height="75" width="75" />
          <h3>Pusheen Cat</h3>
          <p>Cookie-eating cat at</p>
          <p>CartoonWorld</p>
        </div>
        <div className={css.viewsContainer}>
          <p className={css.count}>116</p>
          <span className={css.text}>Who's viewed your profile</span>
        </div>
        <div>
          <p className={css.count}>2017</p>
          <span className={css.text}>Connections</span>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
