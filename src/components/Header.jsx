import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart,} from '@fortawesome/free-solid-svg-icons'

import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {

  

  return (
    <div className='header'>
      <div className="container">
          <div className="top row">
              <div className="col">
                  <div className="topDiv">     
                        
                  </div>
                 
              </div>
          </div>
          <div className="middle row">
              <div className="col">
                               
              </div>
              <div className="col">
                <div className="nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
              </div>
              <div className="col">
                    <div className="buttons">
                        
                        
                        <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> Cart({state.length})</Link>
                    </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Header
