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
    }, [])

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
                                        <td>합계부분</td>
                                        <td>@mdo</td>
                                    </tr>

                                </tbody>
                                // </table>
                            )
                        })

                        : <h1>장바구니 페이지</h1>
                }
            </table>

            {/* <div className={cs('barsket-box')}>
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: '3%' }}></th>
                            <th style={{ width: '20%' }}>이미지</th>
                            <th style={{ width: '20%' }}>상품정보</th>
                            <th>가격</th>
                            <th>수량</th>
                            <th>배송비</th>
                            <th>합계</th>
                            <th>선택</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '3%' }}>1</td>
                            <td style={{ width: '15%' }}>
                                <img src={process.env.PUBLIC_URL + `/img/${jdata[0].img}.jpg`} />
                            </td>
                            <td style={{ width: '15%' }}>상품정보</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                        </tr>
                    </tbody>
                </table>
            </div> */}

        </div>
    )
}

export default Mypage