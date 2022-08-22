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
    console.log(newarr);

    let [item, setItem] = useState(All())

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
                    <div className={cs('img-box')} onClick={(e) => {
                        console.log(e.target.id);
                    }}>
                        <img id={a.img} src={process.env.PUBLIC_URL + `/img/${a.img}.jpg`} />
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
                    <div className={cs('img-box')} onClick={(e) => {
                        console.log(e.target.id);
                        window.location.href = `/${e.target.id}`
                    }}>
                        <img id={a.img} src={process.env.PUBLIC_URL + `/img/${a.img}.jpg`} />
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
                    setItem(All())
                }}>ALL</p>

                <p onClick={() => {
                    setItem(Category(a.auter))
                }}>COATS &amp; JACKET</p>
                <p onClick={() => {
                    setItem(Category(a.top))
                }}>TOPS</p>
                <p onClick={() => {
                    setItem(Category(a.dress))
                }}>DRESSES</p>
                <p onClick={() => {
                    setItem(Category(a.bottom))
                }}>BOTTOMS</p>
            </div>

            <div className={cs('sale')}>
                <p>LATEST PRODUCTS</p>
                <p>20% OFF ALL TOPS &amp; DRESS</p>
            </div>

            <div id='dd' className={cs('dd')}>
                {item}
            </div>

            <br></br>
            <br></br>


        </div>
    )
}




export default Shop