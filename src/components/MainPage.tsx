import React from "react";
import imgCookieBackground from '../assets/cookies_bgr.png'


export default function MainPage() {


    return (
        <div className='mainPage_container'>
            <div role='first_page' style={{ height: 'calc(100vh - 80px)', position: 'relative', display: 'flex', alignItems: 'center' }}>
                <img src={imgCookieBackground} style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', zIndex: '-1' }} alt="" />
                <span className='homepage_title'>Nossos <span style={{ color: '#991010' }}>cookies</span> são maravilhosos.</span>
            </div>
        </div>
    )
}

/*             <div style={{ width: '100%' }} role='second_page'>
                <div style={{ margin: 'auto', width: '80%', height: '100vh', backgroundColor: 'rgba(255, 255, 255, 0,75' }}>
                    <span className='common_font' style={{ color: '#991010', fontSize: '48px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    <p className='common_font' style={{ color: '#991010', fontSize: '48px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>  */