import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Header = () => {
 const el = useRef(null);

 useEffect(() => {
   const typed = new Typed(el.current, {
     strings: ['Software Design', 'Software Development', 'Security Compliance Testing'],
     typeSpeed: 40,
     backSpeed: 60,
     loop: true,
   });

   // Cleanup
   return () => {
     typed.destroy();
   };
 }, []);

 return (
   <div className="header-wrapper">
     <div className="main-info">
       <h1 className='text-capitalize text-warning'>Software design and development</h1>
       <span className='fs-2 text-light' ref={el}></span>
       <a href="" className='btn btn-outline-info text-light mt-3 fw-bolder'>CONTACT ME</a>
     </div>
   </div>
 )
}

export default Header;
