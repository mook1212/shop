import style from './Mainpage.module.css'
import classNames from 'classnames/bind'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from "react"
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
const cs = classNames.bind(style);

function Mainpage() {

    let navigate = useNavigate();
    var beforePosition = document.documentElement.scrollTop

    document.addEventListener('scroll', function () {
        
        if (window.scrollY > 2100) {
            document.querySelector('#aa').style.display = 'none'
        } else if (window.scrollY < 2100) {
            document.querySelector('#aa').style.display = 'flex'
        }

    });


    return (
            <div  className={cs('main1')}>

                <div className={cs('img-box')}>
                    <div className={cs('aa')}>
                        <h1>NEW IN</h1>
                        <p>Explore this week's latest collection of the season curated for you</p>
                        <button onClick={() => { navigate('/shop') }}>VIEW</button>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/img/aa.jpg'} />
                </div>

                <div className={cs('img-box')}>
                    <div className={cs('aa')}>
                        <h1>COLLECTION</h1>
                        <p>Explore this week's latest collection of the season curated for you</p>
                        <button onClick={() => { navigate('/shop') }}>VIEW</button>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/img/main2.jpg'} />
                </div>

                <div className={cs('img-box')}>
                    <div id='aa' className={cs('aa')}>
                        <h1>SPECIAL PRICES</h1>
                        <p>Explore this week's latest collection of the season curated for you</p>
                        <button onClick={() => { navigate('/shop') }}>VIEW</button>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/img/main3.jpg'} />
                </div>


            </div>
            
    )
}

export default Mainpage