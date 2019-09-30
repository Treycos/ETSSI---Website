import React, { useState, useEffect } from 'react';
import Pages from './pages';
import Networks from './networks';
import '../css/header.css';
import exia_logo from '../img/logo_carre_rouge_tp_white_optimized.png';

export default function Header() {

    const [sticky, setSticky] = useState(false);

    const scrolled = () => {
        setSticky(window.scrollY > 300);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrolled, false);

        return () => {
            window.removeEventListener("scroll", scrolled);
        }
    }, []);

    return (
        <header>
            <div id="header-area" className={sticky ? "sticky" : "fixed"}>
                <nav>
                    <Pages/>
                </nav>
                <div className="logo-img">
                    <a href="index.html">
                        <img src={exia_logo} alt="logo exia conférence" />
                    </a>
                </div>
                <div className="header-right">
                    <div className="social_links">
                        <Networks size="2x"/>
                    </div>
                    <button className="filled" >Réserver ma place</button>
                    <div className="hamburger-menu"></div>
                </div>
            </div>
        </header>
    )
}