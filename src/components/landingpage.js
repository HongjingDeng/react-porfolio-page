
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://hongjingdeng.github.io/Portfolio/assets/hongjing.png"
              alt="Hongjingpic"
              className="avatar-img"
            />
            <br></br>
            <div className="banner-text" style={{ marginTop: '25px' }}>
              <br></br>
              <h1>Full Stack Web Developer</h1>


              <p>HTML/CSS | Bootstrap | JavaScript | React | MERN | NodeJS | Express | MongoDB</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;