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
    // console.log(jdata[0].count);



    return (
        <div className={cs('main')}>
            <table className={cs('table')}>
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

                            let pr = jdata[i].price
                            let price = jdata[i].price.toLocaleString('ko-KR')
                            let title = jdata[i].title
                            let count = jdata[i].count
                            let total = jdata[i].total.toLocaleString('ko-KR')
                            let zz = count * pr
                            console.log(count);

                            return (
                                // <table class="table">
                                <tbody>
                                    <tr className={cs('aa')}>
                                        <th scope="row">{i + 1}</th>
                                        <td>
                                            <img src={process.env.PUBLIC_URL + `/img/${jdata[i].img}.jpg`} />
                                        </td>
                                        <td >{title}</td>
                                        <td>{price}원</td>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <input style={{ height: '30px' }} type="number" value={count} min="1" max="10" />
                                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                    <button onClick={() => {
                                                        let to = (jdata[i].count + 1) * jdata[i].price

                                                        axios.put('http://localhost:8000/barsket-update', {
                                                            title: jdata[i].title,
                                                            count: jdata[i].count + 1,
                                                            total: to
                                                        })
                                                        re()
                                                    }}>+</button>
                                                    <button onClick={() => {
                                                        let to = (jdata[i].count - 1) * jdata[i].price
                                                        console.log(to);
                                                        if (count != 1) {
                                                            axios.put('http://localhost:8000/barsket-update', {
                                                                title: jdata[i].title,
                                                                count: jdata[i].count - 1,
                                                                total: to
                                                            })
                                                        }
                                                        re()
                                                    }}>-</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>무료</td>
                                        <td >{total}원</td>
                                        <td className={cs('delete')}>
                                            <button id='x' onClick={() => {
                                                let name = jdata[i].title

                                                axios.delete('http://localhost:8000/mypage', {
                                                    data: { title: name }
                                                })

                                                re()

                                            }}>x 삭제</button>
                                        </td>
                                    </tr>

                                </tbody>
                            )
                        })

                        : <h1>장바구니 페이지</h1>
                }
            </table>

            <div className={cs('total-cart')}>
                <div className={cs('order')}>

                    <p>총 상품 개수 : {jdata.length}개</p>
                    <p>배송료 : 무료 </p>
                    <p>합계 금액 : {
                        jdata.map((a, i) => {
                            let qq;
                            let tt = parseInt(jdata[i].total)
                            qq += tt
                            console.log(tt);
                            return (
                                qq
                            )
                        })
                    }</p>
                    <button>구매하기</button>
                </div>
            </div>

        </div>
    )
}

export default Mypage