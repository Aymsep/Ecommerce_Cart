import {NavLink,Link} from 'react-router-dom';
import './App.css'
export default function Nav(){
    return (
        <>
        <NavLink to='/' >Home</NavLink><br />
        <NavLink to='/about'>About</NavLink><br />
        <NavLink to='/products'>Products</NavLink>
        </>
    )
}