import React from 'react';
import './Home.css';

let home = () =>{
  return (
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
                  <img className="rounded-circle " src="assets/img/me.jpg" alt="" height="200px" width="200px"/>
          <div className="intro-lead-in">Hello! My name is <span className="name">Ahmad Syafiq. </span></div>
          <div className="intro-lead-in">I'm a full-stack Web Application Developer.</div>
          <a className="btn btn-primary text-uppercase js-scroll-trigger" style={{width: "8&", fontSize: "30px"}} href="#about"><i className="far fa-caret-square-down"></i></a>
        </div>
      </div>
    </header>
  );
}

export default home;
