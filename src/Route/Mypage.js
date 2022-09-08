import style from './Mypage.module.css'
import classNames from 'classnames/bind'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jdata from '../DB/data.json'
import { createContext, useEffect, useState } from "react"
import { Route, Routes, Link, useNavigate, Outlet, useParams, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { changetitle, changecount, changeimg, changeprice } from '../store';
import axios from 'axios'
import { login_confirm } from '../재사용';
const cs = classNames.bind(style);


function Mypage() {

    let [aa, setaa] = useState('0')

    function re() {
        setTimeout(() => {
            if (aa == '0') {
                setaa('1')
            } else if (aa == '1') {
                setaa('0')
            }
        }, 1);
    }

    console.log(aa);

    let [jdata, setJdata] = useState([])
    useEffect(() => {
        axios('http://localhost:8000/barsket')
            .then(res => {
                setJdata(res.data)
                console.log('성공');
                // console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
        console.log(jdata);
    }, [aa])
    console.log(jdata);

    function x() {
        console.log('a');
    }


    return (
        <div className={cs('main')}>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">이미지</th>
                        <th scope="col">상품정보</th>
                        <th scope="col">가격</th>
                        <th scope="col">수량</th>
                        <th scope="col">배송비</th>
                        <th scope="col">합계</th>
                        <th scope="col">선택</th>
                    </tr>
                </thead>
                {
                    jdata != ''
                        ? jdata.map((a, i) => {
                            return (
                                // <table class="table">
                                <tbody>
                                    <tr className={cs('aa')}>
                                        <th scope="row">{i + 1}</th>
                                        <td>
                                            <img src={process.env.PUBLIC_URL + `/img/${jdata[i].img}.jpg`} />
                                        </td>
                                        <td >{jdata[i].title}</td>
                                        <td>{jdata[i].price}원</td>
                                        <td>수량부분</td>
                                        <td>무료</td>
                                        <td onClick={() => { x() }}>합계부분</td>
                                        <td>
                                            <button id='x' onClick={() => {
                                                let name = jdata[i].title

                                                axios.delete('http://localhost:8000/mypage', {
                                                    data: { title: name }
                                                })
                                                // axios.put('http://localhost:8000/barsket-update', {
                                                //     tilte : name
                                                // })
                                                re()

                                            }}>x 삭제</button>
                                        </td>
                                    </tr>

                                </tbody>
                                // </table>
                            )
                        })

                        : <h1>장바구니 페이지</h1>
                }
            </table>

        </div>
    )
}

export default Mypage