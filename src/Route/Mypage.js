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
    let [total_price, setTotal_price] = useState()
    useEffect(() => {
        axios('http://localhost:8000/barsket')
            .then(res => {
                setJdata(res.data)
                console.log('성공');
                // 총 합계 금액
                let qq = 0;
                if (res.data.length == 0) {
                    setTotal_price(0)
                } else {
                    res.data.forEach((a, i) => {
                        qq += a.total
                        setTotal_price(qq.toLocaleString('ko-KR'))
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [aa])



    return (
        <div className={cs('main')}>
            {/* <table className={cs('table')}>
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
            </table> */}

            <div>
                <h3>SHOPPING CART ITEMS</h3>
            </div>



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

                            <div className={cs('barsket')}>
                                <div className={cs('item-img')}>
                                    <img src={process.env.PUBLIC_URL + `/img/about.jpg`} />
                                </div>
                                <p>{title}</p>
                                <p>{price}원</p>
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
                                {/* <p>배송비 : 무료</p> */}
                                <p style={{margin : '10px'}}>합계 : {total}원</p>
                                <div className={cs('delete')}>
                                    <button id='x' onClick={() => {
                                        let name = jdata[i].title

                                        axios.delete('http://localhost:8000/mypage', {
                                            data: { title: name }
                                        })

                                        re()

                                    }}>x 삭제</button>
                                </div>

                            </div>
                        )
                    })
                    : <h3 style={{margin : '15px'}}>* 장바구니에 담은 상품이 존재하지 않습니다.</h3>
            }

            {/* {
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
                        }) */}

            <div className={cs('total-cart')}>
                <div className={cs('order')}>

                    <p>배송비 : 무료 </p>
                    <p>합계 금액 : {total_price}원</p>
                    <button>구매하기</button>
                </div>
            </div>

        </div>
    )
}

export default Mypage