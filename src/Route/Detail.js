import style from './shop.module.css'
import classNames from 'classnames/bind'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from "react"
import { Route, Routes, Link, useNavigate, Outlet, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios'
const cs = classNames.bind(style);


function Detail() {
    let {page} = useParams();

    let a = useSelector((state) => { return state })

    let arr = []
    let newarr = arr.concat(a.dress, a.top, a.bottom, a.auter)
    // console.log(newarr);

    // let [item, setItem] = useState(All())

    let navigate = useNavigate();

    return (
        <div className='detail'>

        </div>
    )
}




export default Detail