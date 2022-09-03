import style from './Login.module.css'
import classNames from 'classnames/bind'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from "react"
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
const cs = classNames.bind(style);


function Login() {

    let [join, setJoin] = useState('none')

    return (
        <div>
            <div className={cs('main')}>
                <div className={cs('login-box')}>
                    <h1>LOGIN</h1>
                    <div className={cs('content')}>
                        <input id='login-id' type='text' placeholder='아이디를 입력하세요.' />
                        <input id='login-pw' type='text' placeholder='비밀번호를 입력하세요.' />
                    </div>

                    <div className={cs('login-btn')}>
                        <button id='login' onClick={() => {
                            let local_id = window.localStorage.getItem('ID')
                            let local_pw = window.localStorage.getItem('PW')

                            let id = document.querySelector('#login-id').value;
                            let pw = document.querySelector('#login-pw').value;

                            if (local_id != id) {
                                alert('아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. \n입력하신 내용을 다시 확인해주세요.')
                            } else if (local_pw != pw) {
                                alert('아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. \n입력하신 내용을 다시 확인해주세요.')
                            } else {
                                window.location.href = '/'
                            }
                        }}>LOGIN</button>
                        <button id='joinus' onClick={() => {
                            if (join == 'none') {
                                setJoin('show')
                            } else if (join == 'show') {
                                setJoin('none')
                            }
                        }}>JOIN US</button>
                    </div>

                    <div className='flex' style={{ marginTop: '10px' }}>
                        <p style={{ fontSize: '13px', marginRight: '10px' }}>* 아이디 찾기</p>
                        <p style={{ fontSize: '13px' }}>* 비밀번호 찾기</p>
                    </div>
                </div>
            </div>

            <div id='dropdown-nav' className={cs(`dropdown-nav`, `${join}`)}>
                <div className={cs('nav-modal')}>
                    <p>회원가입</p>
                    <form>
                        <div className={cs('id-box')}>
                            <p>아이디 *</p>
                            <input id='join-id' type='text' />
                        </div>

                        <div className={cs('pw-box')}>
                            <p>패스워드 *</p>
                            <input id='join-pw' type='text' />
                        </div>
                        <div>
                            <p>이름</p>
                            <input id='join-name' type='text' />
                        </div>
                        <div>
                            <p>전화번호</p>
                            <input id='join-phone' type='text' />
                        </div>
                    </form>

                    <div className={cs('join-box')}>
                        <button onClick={() => {

                            let id = document.querySelector('#join-id').value;
                            let pw = document.querySelector('#join-pw').value;
                            let name = document.querySelector('#join-name').value;
                            let phone = document.querySelector('#join-name').value;

                            window.localStorage.setItem('ID', id)
                            window.localStorage.setItem('PW', pw)

                            if (id == '') {
                                alert('아이디를 입력해주세요.')
                            }
                            else if (pw == '') {
                                alert('패스워드를 입력해주세요.')
                            }
                            else if (name == '') {
                                alert('이름을 입력해주세요.')
                            }
                            else if (phone == '') {
                                alert('전화번호를 입력해주세요.')
                            } else {

                                document.querySelector('#join-id').value = '';
                                document.querySelector('#join-pw').value = '';
                                document.querySelector('#join-name').value = '';
                                document.querySelector('#join-phone').value = '';

                                if (join == 'none') {
                                    setJoin('show')
                                } else if (join == 'show') {
                                    setJoin('none')
                                }
                            }

                        }}>회원가입</button>
                        <button onClick={() => {
                            document.querySelector('#join-id').value = '';
                            document.querySelector('#join-pw').value = '';
                            document.querySelector('#join-name').value = '';
                            document.querySelector('#join-phone').value = '';

                            if (join == 'none') {
                                setJoin('show')
                            } else if (join == 'show') {
                                setJoin('none')
                            }
                        }}>돌아가기</button>

                    </div>
                </div>
            </div>
        </div>

    )
}

function Join() {

    // document.querySelector('#join-id')

}

export default Login