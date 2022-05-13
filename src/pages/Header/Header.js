import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'

function Header({ currentPage, handlePageChange }) {
    return (
  
      <section>
        <div >
        <div class='logoBox'>
        <div class='logoText1'>
          MARC
        </div>
        <div class='logoText2'>
          PACAMPARA
        </div>
      </div>
        </div>
  
      </section>
    );
  }
  
  export default Header;