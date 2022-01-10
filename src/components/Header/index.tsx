import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className='py-4 d-flex justify-content-between align-items-center'>
            <Link to="/"><img width={200} src={logo} alt="World App" /></Link>
            <Link className='text-dark text-decoration-none' to="/">Home</Link>
        </div>
    )
}

export default Header
