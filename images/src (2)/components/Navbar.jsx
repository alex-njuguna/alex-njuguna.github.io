import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light rounded shadow">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={logo} alt="logo" width='70px' className='rounded-circle'/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">about me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">how i work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">contacts</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar