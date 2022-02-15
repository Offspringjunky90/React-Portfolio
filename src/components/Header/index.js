import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Robert Augusta</h1>
      <h2>About Me</h2>
      <h3>Portfolio</h3>
      <h4>Contact</h4>
      <h5>Resume</h5>
      <img src={coverImage} alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;
