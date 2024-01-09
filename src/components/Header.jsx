import React from 'react'
import Typed from 'react-typed'

const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1 className='text-capitalize text-warning mt-2'>Software design and development</h1>
            <Typed 
            className='fs-2 text-white'
            strings={['Software Design', 'Software Development', 'Security Compliance Testing']}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
        </div>
    </div>
  )
}

export default Header