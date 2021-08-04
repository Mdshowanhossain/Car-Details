import React from 'react'
import { Link } from 'react-router-dom';

import close from '../SvgPhoto/close.svg';
import open from '../SvgPhoto/open.svg';


const Navbar = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <h1><Link href="">LOGOS</Link></h1>
                </div>
                <ul>
                    <li><Link to="">HOME</Link></li>
                    <li><Link to="">LinkBOUT</Link></li>
                    <li><Link to="">CONTLinkCT</Link></li>
                    <li><Link to="/products">PRODUCTS</Link></li>
                    <li><Link to="">LOGIN/SIGNUP</Link></li>
                    <li>
                        <img className="menu" src={close} alt="" style={{ width: 30 }} />
                    </li>
                </ul>
                <div className="menu">
                    <img src={open} alt="" style={{ width: 30 }} />
                </div>
            </header>
        </div>
    )
}

export default Navbar
