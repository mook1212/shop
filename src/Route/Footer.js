import style from './Footer.module.css'
import classNames from 'classnames/bind'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from "react"
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
const cs = classNames.bind(style);

function Footer() {

    let navigate = useNavigate();

    var para = document.location.href.split("/");

    setTimeout(() => {
        // useEffect(()=> {
            if(para[3] == 'mypage') {
            //     document.getElementById('main-footer').style.position = 'absolute'
            //     document.getElementById('main-footer').style.width = '100%'
            //     document.getElementById('main-footer').style.bottom = '0'
            }
        // })
    }, 1);


    return (
        <div id='main-footer' className={cs('main')}>

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

export default Footer