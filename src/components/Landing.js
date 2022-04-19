
import React, { Component } from 'react';
import '../styles/Landing.css';


class Landing extends Component {
  constructor(props) {
      super(props);

  }
  render() {
    return <div className="landing__background">

      <div className="landing__topLeft">
        <img className="landing__profilePhoto" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/272401328_7119681694709443_145450356369664909_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4KNYypwRJxkAX-0DBvq&_nc_ht=scontent-sjc3-1.xx&oh=00_AT_YXHmgeh4jhF5mU8qRFIgRFd4UAhQHmaE5ZxEhgZCUng&oe=626293FF"/>

          <div className="landing__name">Oliver David</div>
          <div className="landing__ethers">5 eth</div>
      </div>


    </div>;
  }
}

export default Landing;
