import React from "react";
import './navbar.css';
import Style from '../../constants/style'
export default function NavBar(){
    return (
        <nav className="navbar" style={{...Style.navBar}}>
            <a href="javascript:void(0)" onClick={()=>{}}>
                Home
            </a>
            <a href="javascript:void(0)">Product</a>
            <a href="javascript:void(0)">News</a>
            <a href="javascript:void(0)">Support</a>
            <a href="javascript:void(0)">About us</a>
        </nav>
    )
}