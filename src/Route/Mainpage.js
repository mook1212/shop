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
        <div id='main'>
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
            
            <div id='foo' className={cs('footer')}>
                <div className={cs('foo1')}>
                    <p>SHOP</p>
                    <p>OREDER</p>
                    <p>SIGN IN</p>
                    <p>ABOUT US</p>
                </div>

                <div className={cs('foo2')}>
                    <p>협찬 관련 문의 : 02-470-4520</p>
                    <p>CS 및 상품 관련 문의 : 02-110-0407</p>
                    <p>고객센터 09 : 00 ~ 18 : 00 운영 / 점심시간 12:00 ~ 13:00 </p>
                </div>
                <br></br>

                <div className={cs('foo3')}>
                    <p>COMPANY 주식회사무드</p>
                    <p>OWNER 김경묵 | BUSINESS NO. 010-2523-7762</p>
                    <p>E-MAIL apsode211@naver.com</p>
                    <p>ADDRESS 인천광역시 부평구 갈월서로80 MOOD COMPANY</p>
                    <p>COPYRIGHT ©주식회사무드 ALL RIGHTS RESERVED.</p>
                </div>

            </div>
        </div>
    )
}

export default Mainpage