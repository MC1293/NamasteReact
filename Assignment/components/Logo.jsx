import React from "react";
import logo from '../logo/logo.png';
import '..//index.css';

export const Logo = () => {
    const logoElement = <img className="logoClass" src= {logo}></img>
    return (
        <>
        {logoElement}
        </>
    )
}