import style from './shop.module.css'
import classNames from 'classnames/bind'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from "react"
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios'
const cs = classNames.bind(style);


function Shop() {

    let a = useSelector((state) => { return state })

    let arr = []
    let newarr = arr.concat(a.dress, a.top, a.bottom, a.auter)
    // console.log(newarr);

    let [zz, setzz] = useState(All())

    let navigate = useNavigate();

    function A() {
        return (
            <>
                <p>안녕</p>
            </>
        )
    }

    function All() {

        return (
            newarr.map((a, i) => {

                return (
                    <div className={cs('img-box')}>
                        <img src={process.env.PUBLIC_URL + `/img/${a.img}.jpg`} />
                        <p>{a.title}</p>
                        <p>가격 : {a.price}</p>
                    </div>
                )
            })
        )
    }

    function Category(z) {
        return (
            z.map((a, i) => {
                return (
                    <div className={cs('img-box')}>
                        <img src={process.env.PUBLIC_URL + `/img/${a.img}.jpg`} />
                        <p>{a.title}</p>
                        <p>가격 : {a.price}</p>
                    </div>
                )
            })
        )
    }


    return (
        <div className='Shop'>
            <div className={cs('category')}>

                <p onClick={() => {
                    setzz(Category(a.dress))
                }}>ALL</p>

                <p>COATS &amp; JACKET</p>
                <p>TOPS</p>
                <p>DRESSES</p>
                <p>BOTTOMS</p>
            </div>

            <div className={cs('sale')}>
                <p>LATEST PRODUCTS</p>
                <p>20% OFF ALL TOPS &amp; DRESS</p>
            </div>

            <div id='item-box'>
                <div id='dd' className={cs('dd')}>
                    {zz}
                </div>
            </div>

            <br></br>
            <br></br>


        </div>
    )
}




export default Shop