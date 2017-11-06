import React, { PureComponent } from 'react';
import css from './App.css';
import { StickyContainer, Sticky } from 'react-sticky';
import { Container, Row, Col } from 'reactstrap';
import { CSSTransitionGroup } from 'react-transition-group';
import Navbar from './components/navbar/navbar.jsx';
import Banner from './components/banner/banner.jsx';
import ProfileCard from './components/profile-card/profile-card.jsx';
import FeedCard from './components/feed-card/feed-card.jsx';

const fakeData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

class App extends PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <div className={css.appContent}>
          <Banner />
          <StickyContainer>
            <Sticky>
              {({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
                console.log('sticky: ', isSticky, wasSticky, style);
                return <ProfileCard style={style} />;
              }}
            </Sticky>
            <div className={css.feedSection}>{fakeData.map(() => <FeedCard />)}</div>
          </StickyContainer>
        </div>
      </div>
    );
  }
}

export default App;
