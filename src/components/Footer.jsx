import { faFacebook, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="row">
                <div className="col">
                   
                    <div className="content">
                        <p>elite clothline handles both women and men  fashions. Visit our shop at Imenti house via +254713510036 </p>
                    </div>
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
                    <h3>Follow Us</h3>
                    <div className="right">
                        <Link to="/"><FontAwesomeIcon icon={faFacebook} /></Link>
                        <Link to="/"><FontAwesomeIcon icon={faInstagramSquare} /></Link>
                        <Link to="/"><FontAwesomeIcon icon={faTwitterSquare} /></Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <hr />
                    <div className="copyRights">
                        <p className="copy">&copy; 2022. All Rights Reserved.  </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
