import { Route, Routes, Link, useNavigate, Outlet, Navigate } from 'react-router-dom'

function login_confirm (a) {
    let local_id = window.localStorage.getItem('ID')
    let token = window.localStorage.getItem('token')

    if (local_id != token) {
        alert('로그인 후 이용 가능합니다.')
        window.location.href = '/login'
    } else {
        window.location.href = a
    }
}
// export default A
export {login_confirm}