import style from './shop.module.css'
import classNames from 'classnames/bind'
import Jdata from '../DB/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from "react"
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios'
import { login_confirm } from '../재사용';
const cs = classNames.bind(style);
// import Detail from './Detail.js'



function Shop() {

    // let a = useSelector((state) => { return state })

    // let arr = []
    // let newarr = arr.concat(a.dress, a.top, a.bottom, a.auter)
    // console.log(newarr);
    // console.log(a.auter);

    let [item, setItem] = useState(All())

    let navigate = useNavigate();
    console.log(Jdata);
    let data = []
    let newdata = data.concat(Jdata.dress,Jdata.auter,Jdata.bottom,Jdata.top)
    console.log(newdata);

    function All() {
        let data = []
        let newdata = data.concat(Jdata.dress,Jdata.auter,Jdata.bottom,Jdata.top)
        console.log(newdata);

        return (
            newdata.map((a, i) => {

                return (
                    <div className={cs('img-box')} onClick={(e) => {
                        window.location.href = `/${a.img}`
                        console.log(e.target.id);
                        console.log(a.title);
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
                        window.location.href = `/${a.img}`
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


    return (
        <div className='Shop'>
            <div className={cs('category')}>

                <p onClick={() => {
                    setItem(All())
                }}>ALL</p>

                <p onClick={() => {
                    setItem(Category(Jdata.auter))
                }}>COATS &amp; JACKET</p>
                <p onClick={() => {
                    setItem(Category(Jdata.top))
                }}>TOPS</p>
                <p onClick={() => {
                    setItem(Category(Jdata.dress))
                }}>DRESSES</p>
                <p onClick={() => {
                    setItem(Category(Jdata.bottom))
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