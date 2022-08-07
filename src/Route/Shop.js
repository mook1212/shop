import style from './shop.module.css'
import classNames from 'classnames/bind'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from "react"
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
const cs = classNames.bind(style);

function Shop() {

    let navigate = useNavigate();


    return (
        <div className='Shop'>
            <h2>하이</h2>
        </div>
    )
}

export default Shop