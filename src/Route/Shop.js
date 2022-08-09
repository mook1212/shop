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

    let navigate = useNavigate();

    return (
        <div className='Shop'>
            <br></br>
            <br></br>
            <br></br>
            <div className={cs('dd')}>

                {
                    newarr.map((a, i) => {
                        return (
                            <div className={cs('img-box', 'first')}>
                                <img src={process.env.PUBLIC_URL + `/img/${a.img}.jpg`} />
                                <p>{a.title}</p>
                                <p>가격 : {a.price}</p>
                            </div>
                        )


                        // if (i != 0 && i % 3 == 0) {
                        //     return (
                        //         <div className={cs('dd')}>
                        //             <div className={cs('img-box','first')}>
                        //                 <img src={process.env.PUBLIC_URL + `/img/${newarr[i - 2].img}.jpg`} />
                        //                 <p>{newarr[i - 2].title}</p>
                        //                 <p>가격 : {newarr[i - 2].price}</p>
                        //             </div>
                        //             <div className={cs('img-box')}>
                        //                 <img src={process.env.PUBLIC_URL + `/img/${newarr[i - 1].img}.jpg`} />
                        //                 <p>{newarr[i - 1].title}</p>
                        //                 <p>가격 : {newarr[i - 1].price}</p>
                        //             </div>
                        //             <div className={cs('img-box','last')}>
                        //                 <img src={process.env.PUBLIC_URL + `/img/${newarr[i].img}.jpg`} />
                        //                 <p>{newarr[i].title}</p>
                        //                 <p>가격 : {newarr[i].price}</p>
                        //             </div>

                        //         </div>
                        //     )
                        // }


                    })
                }
            </div>
            <br></br>
            <br></br>


        </div>
    )
}

export default Shop