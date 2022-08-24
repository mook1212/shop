import style from './Detail.module.css'
import classNames from 'classnames/bind'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jdata from '../DB/data.json'
import { createContext, useState } from "react"
import { Route, Routes, Link, useNavigate, Outlet, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios'
const cs = classNames.bind(style);


function Detail() {
    let { page } = useParams();

    let a = useSelector((state) => { return state })

    let arr = []
    let newarr = arr.concat(a.dress, a.top, a.bottom, a.auter)

    let navigate = useNavigate();
    console.log(page);

    let [drop, setDrop] = useState('none')

    function None() {
        if (drop == 'none') {
            setDrop('show')
        } else if (drop == 'show') {
            setDrop('none')
        }
    }


    function Filter() {
        let aa = []
        let newdata = aa.concat(Jdata.dress, Jdata.auter, Jdata.bottom, Jdata.top)
        console.log(newdata);

        let data = newdata.filter(man => man.img == page)


        let [count, setCount] = useState(1)
        let p = parseFloat(data[0].price)
        
        console.log(p);
        let [price, setPrice] = useState(p)

        function Countplus() {
            setCount(count + 1)
            setPrice(p*(count+1))
        }
        function Countdown() {
            if (count != 1) {
                setCount(count - 1)
                setPrice(p*(count-1))
            }
        }

        let pp = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

        return (
            <>
                <div className={cs('img-box')}>
                    <img src={process.env.PUBLIC_URL + `/img/${page}.jpg`} />
                </div>
                <div className={cs('cart')}>
                    <p style={{ fontWeight: 'bold' }}>{data[0].title}</p>
                    <br></br>
                    <p style={{ fontSize: '14px' }}>{data[0].price}원</p>
                    <br></br>
                    <div className={cs('shipping')}>
                        <div className={cs('ship-box1')}>
                            <p>배송방법</p>
                            <p>배송비</p>
                        </div>

                        <div className={cs('ship-box2')}>
                            <p>택배</p>
                            <select>
                                <option value="">주문시 결제(선결제)</option>
                                <option value="">수령시 결제(착불)</option>
                            </select>
                            <p style={{ fontSize: '13px', marginLeft: '0px' }}>0원 (OPEN기념 무료 배송)</p>
                        </div>
                    </div>

                    <div className={cs('explanation')}>
                        <p >INSTRUCTION</p>
                        <p >SIZE GUIDE</p>
                        <p >SHIPPING</p>
                    </div>

                    {/* <div className={cs('instruction')}>

                    </div>

                    <div className={cs('size-guide', `${drop}`)}>
                        <img src={process.env.PUBLIC_URL + `/img/size.jpg`} />
                    </div>

                    <div className={cs('shipping-guide')}>

                    </div> */}

                    <div className={cs('size-box')}>
                        <select>
                            <option value="">-[필수] 옵션을 선택해 주세요-</option>
                            <option value="">----------------------------</option>
                            <option value="FREE">FREE</option>
                        </select>
                    </div>

                    <div className={cs('goods',`${drop}`)}>
                        <p>{data[0].title}</p>
                        <div className='flex'>
                            <p>Free</p>
                            <p style={{ marginLeft: 'auto' }}>{pp}원</p>
                        </div>
                        <div className={cs('count')}>
                            <input type="number" value={count} min="1" max="10" />
                            <button onClick={() => { Countplus() }} style={{ marginLeft: '10px' }}>+</button>
                            <button onClick={() => { Countdown() }}>-</button>
                        </div>
                    </div>

                    <div className={cs('total')}>
                        <p>TOTAL :</p>
                    </div>

                    <div className={cs('buy')}>
                        <button>ADD CART</button>
                        <button>BUY NOW</button>
                    </div>

                </div>
            </>
        )
    }

    return (
        <div className={cs('detail')}>
            {Filter()}

        </div>
    )
}




export default Detail