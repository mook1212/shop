import style from './Login.module.css'
import classNames from 'classnames/bind'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from "react"
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
const cs = classNames.bind(style);

function Login() {

    return (
        <div className={cs('main')}>
            <div className={cs('login-box')}>
                <h1>LOGIN</h1>
                <div className={cs('content')}>
                    <input type='text' placeholder='아이디를 입력하세요.' />
                    <input type='text' placeholder='비밀번호를 입력하세요.' />
                </div>

                <div className={cs('login-btn')}>
                    <button>LOGIN</button>
                    <button>JOIN US</button>
                </div>

                <div className='flex' style={{marginTop : '10px'}}>
                    <p style={{fontSize : '13px', marginRight : '10px'}}>*아이디 찾기</p>
                    <p style={{fontSize : '13px'}}>*비밀번호 찾기</p>
                </div>
            </div>
        </div>

    )
}

export default Login