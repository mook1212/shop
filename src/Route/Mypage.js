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
    console.log(jdata);
    console.log(jdata[0].img);

    return (
        <div className={cs('main')}>
            <table class="table">
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
                <tbody>
                    <tr className={cs('aa')}>
                        <th scope="row">1</th>
                        <td>
                            <img src={process.env.PUBLIC_URL + `/img/${jdata[0].img}.jpg`} />
                        </td>
                        <td>{jdata[0].title}</td>
                        <td>{jdata[0].price}원</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    {/* <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default Mypage