import React from 'react'
import logo from '../assets/logo/logo-vertical.png'

function Footer() {
  return (
    <footer id='footer'>
        <div className='wrapper max-h-[300px] md:mt-10! md:pb-10! xl:mt-10! xl:pb-10!'>
            <center className='flex flex-col  md:flex-row md:gap-10 xl:flex-row xl:gap-10'>

                <a href="/">
                    <img src={logo} alt="photo" />
                </a>

                <div className='my-1'>
                    <ul className='list-none flex flex-row gap-4 justify-center mb-3'>
                        <a href="" className='socials-wrapper-mobile social-icon'><i className="lab la-instagram text-5xl"></i></a>
                        <a href="" className='socials-wrapper-mobile social-icon'><i className="lab la-github text-5xl"></i></a>
                        <a href="" className='socials-wrapper-mobile social-icon'><i className="lab la-linkedin text-5xl"></i></a>
                    </ul>
                    <h1>© 2022. All rights reserved.</h1>
                </div>

                
            </center>
        </div>
    </footer>
  )
}

export default Footer