import style from './Nav.module.css'
import classNames from 'classnames/bind'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from "react"
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
const cs = classNames.bind(style);

function Navb() {



    let navigate = useNavigate();
    let [drop, setDrop] = useState('none')

    function None() {
        document.body.classList.remove("stop-scroll");
        if (drop == 'none') {
            setDrop('show')
        } else if (drop == 'show') {
            setDrop('none')
        }
    }


    var beforePosition = document.documentElement.scrollTop

    document.addEventListener('scroll', function () {

        var afterPosition = document.documentElement.scrollTop;

        if (window.scrollY == 0) {
            document.getElementById('nav').style.backgroundColor = ''
        }


        if (afterPosition > 50) {


            if (beforePosition < afterPosition) {
                // 스크롤 아래로

                // document.getElementById('nav').style.opacity = '0'
                document.getElementById('nav').style.transition = '1s'
                document.getElementById('nav').style.backgroundColor = 'black'
                document.querySelector('a').style.color = 'white'
                document.querySelector('nav i').style.color = 'white'
                document.getElementById('basket').style.color = 'white'


            } else {
                // 스크롤 위로 
                document.getElementById('nav').style.opacity = '1'
                document.getElementById('nav').style.transition = '1s'
                document.getElementById('nav').style.backgroundColor = ''
                document.querySelector('a').style.color = 'black'
                document.querySelector('nav i').style.color = 'black'
                document.getElementById('basket').style.color = 'black'


            }

        } else {
            // 평상 시
            // document.getElementById('nav').style.backgroundColor = ''
        }
        beforePosition = afterPosition;
    });

    return (
        <>
            <div className={cs('navbar')}>
                <nav id='nav' className={cs('navbar', 'flex', 'w-100')}>

                    <div className={cs('menu')}>
                        <i onClick={() => {
                            document.body.classList.add("stop-scroll");
                            document.querySelector('.fa-bars').style.position = 'absolute'

                            if (drop == 'none') {
                                document.body.classList.add("stop-scroll");
                                setDrop('show')
                                // document.querySelector('.App').style.marginLeft = '60%'
                                // document.getElementById('nav').style.marginLeft = '60%'
                            } else if (drop == 'show') {
                                document.body.classList.remove("stop-scroll");
                                setDrop('none')
                                // document.querySelector('.App').style.marginLeft = '0px'
                                // document.getElementById('nav').style.marginLeft = '0px'
                            }
                        }} className="pointer fa-solid fa-bars"></i>
                    </div>

                    <div className={cs('logo')}>
                        <a href='/'>MOOD</a>
                    </div>

                    <div className={cs('basket')}>
                        <i id='basket' className="pointer fa-solid fa-basket-shopping"></i>
                    </div>

                </nav>
            </div>

            <div id='dropdown-nav' className={cs(`dropdown-nav`, `${drop}`)}>
                <div className={cs('nav-modal')}>
                    <div className={cs('close-dropdown')}>
                        <p><i onClick={() => {
                            if (drop == 'none') {
                                document.body.classList.add("stop-scroll");
                                setDrop('show')
                            } else if (drop == 'show') {
                                document.body.classList.remove("stop-scroll");
                                setDrop('none')
                            }
                        }} class="fa-solid fa-xmark"></i></p>
                    </div>
                    <div className={cs('my')}>
                        <p>SIGN IN</p>
                        <p>MYPAGE</p>
                    </div>

                    <br></br>
                    <br></br>

                    <div>
                        <p>STORE</p>
                        <p>ORDER</p>
                        <p>ABOUT OUS</p>
                        <p>PRESS</p>
                    </div>
                    <div className={cs('sns')}>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-square-twitter"></i>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navb

