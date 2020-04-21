import React, { Component } from "react";
import "../css/main.css";
import { Link as PageLink, Element } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class Main extends Component {
  render() {
    return (
      <div className="main">
        <PageLink
          activeClass="active"
          className="scroll"
          to="login"
          spy={true}
          smooth={true}
          duration={700}
        >
          <div className="firstScreen">
            <p className="firstTitle">Diary<span className="dot">.</span></p>            
            <div className="downArrow">
              <img className="downArrowImg" src="/images/downArrow.png" />
            </div>
          </div>
        </PageLink>

        <Element name="login" className="secondScreen">
          <ScrollAnimation animateIn="fadeIn" delay={100}>
            <div className="second-title">
              <h2>하루의 한번 🌠</h2>
              <h1>다이어리 쓰기 📝</h1>
            </div>
            <Link to="/login" className="loginBtn">
              LOGIN
            </Link>
          </ScrollAnimation>
        </Element>
      </div>
    );
  }
}

export default Main;
