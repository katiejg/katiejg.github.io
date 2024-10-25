import * as React from 'react';
// import logo from './logo.svg';
import { Link } from "react-router-dom";
import './App.css';
import { BsLinkedin, BsFlower3, BsEnvelopeFill, BsGithub } from "react-icons/bs";
import IconButton from '@mui/material/IconButton';
import Tooltip from "@mui/material/Tooltip";

function Nav() {
  return (
    <div className="Nav">
      <header className="Nav-header">
        <div className="Nav-left">
          <BsFlower3 size="50px" className="App-logo" alt="flower" />
          <Link to="/"><h1>Katie Jiang</h1></Link>
        </div>
        <div className="Nav-right">
          <Link to="/about">Resume</Link>
          <a href="https://github.com/katiejg"><BsGithub class="Icon" /></a>
          <a href="https://www.linkedin.com/in/katie-j-789296298"><BsLinkedin class="Icon" /></a>
          <Tooltip title="KatieJiang[at]u[dot]northwestern[dot]edu" arrow>
            <IconButton disableRipple size="inherit" color="inherit"><BsEnvelopeFill class="Icon" /></IconButton>
          </Tooltip>
        </div>
      </header>
    </div>
  );
}

export default Nav;
