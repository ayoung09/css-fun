import React, { Component } from 'react';
import css from './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Banner from './components/banner/banner.jsx';
import ProfileCard from './components/profile-card/profile-card.jsx';
import FeedCard from './components/feed-card/feed-card.jsx';

const fakeData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className={css.appContent}>
          <Banner />
          <div className={css.profileSection}>
            <ProfileCard />
          </div>
          <div className={css.feedSection}>{fakeData.map(() => <FeedCard />)}</div>
        </div>
      </div>
    );
  }
}

export default App;
