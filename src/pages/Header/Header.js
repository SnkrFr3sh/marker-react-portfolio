import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

function Header({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand logoBox" href="#">
        <div class='logoText1'>
          MARC
        </div>
        <div class='logoText2'>
          PACAMPARA
        </div>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse navbarZ" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/projects"> WEB PROJECTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ART</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">ABOUT</a>
          </li>
        </ul>
      </div>
      {/* <div >
        <div class='logoBox'>
          <div class='logoText1'>
            MARC
          </div>
          <div class='logoText2'>
            PACAMPARA
          </div>
          <div class='logoText1'>
            MARC
          </div>
          <div class='logoText2'>
            PACAMPARA
          </div>
        </div>
      </div> */}

    </nav>
  );
}

export default Header;