import React from 'react'
import Logo from '../jits-blog.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <img src={Logo} alt="" />
            <span>
                Made with React.js
            </span>
        </footer>
    )
}

export default Footer