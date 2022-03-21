import React from 'react';
import './Footer.css'
import pprLogo from '../../images/ppr.jpg';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'black', height:'300px'}} className=" py-3 mt-3">
            <div className="container">
                <div className="row footer-top py-5">
                    <div className="col-md-6 mb-2">
                        <img src={pprLogo} alt=""/>
                    </div>
                    <div className="col-md-2">
                        <ul className="list-unstyled">
                            <li><Link to="/about">About Online Food</Link></li>
                            <li><Link to="/blog">Read Our Blog</Link></li>
                           
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className="list-unstyled">
                            <li><Link to="/help">Get Help</Link></li>
                            <li><Link to="/faq">Read FAQ</Link></li>
                            <small className="text-secondary align-items-center"> Copyright {(new Date()).getFullYear()} All Rights Reserved <a target="_blank" href="https://linkedin.com/in/abu-bakor-siddik-4b9119211"> abs</a> </small>
                        </ul>
                    </div>
                </div>

                
            </div>
        </footer>
    );
};

export default Footer;