import style from './Aboutus.module.css'
import classNames from 'classnames/bind'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jdata from '../DB/data.json'
import { createContext, useEffect, useState } from "react"
import { Route, Routes, Link, useNavigate, Outlet, useParams, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { login_confirm } from '../재사용';
const cs = classNames.bind(style);

function About() {

    return (
        <div className={cs('main')}>
            <div className={cs('about-box')}>
                <div className={cs('about-img')}>
                    <img src={process.env.PUBLIC_URL + `/img/about.jpg`}/>
                </div>

                <div className={cs('about-intro')}>
                    <p>안녕하세요</p>
                    <p>안녕하세요</p>
                    <p>안녕하세요</p>
                    <p>안녕하세요</p>
                </div>
            </div>
        </div>
    )
}

export default About