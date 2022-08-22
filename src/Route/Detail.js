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
    // console.log(newarr);

    // let [item, setItem] = useState(All())

    let navigate = useNavigate();
    console.log(page);

    function Filter() {
        let data = []
        let newdata = data.concat(Jdata.dress, Jdata.auter, Jdata.bottom, Jdata.top)
        console.log(newdata);

        let aa = newdata.filter(man => man.img == page)
        return (
            <>
                <div className={cs('img-box')}>
                    <img src={process.env.PUBLIC_URL + `/img/${page}.jpg`} />
                </div>
                <div className={cs('cart')}>
                    <p>{aa[0].title}</p>
                    <p>{aa[0].price}</p>
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