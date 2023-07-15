import React from 'react'
import Logo from '../jits-blog.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className= 'navbar'>
            <div className='container'>
                <div className='logo'></div>
                <img src={Logo} alt='logo'></img>
                <div className="links">
                    <Link className='link' to='/?cat=submissions'><h6>Submissions</h6></Link>
                    <Link className='link' to='/?cat=warmups'><h6>Warm Ups</h6></Link>
                    <Link className='link' to='/?cat=competing'><h6>Competing</h6></Link>
                    <span>Profile</span>
                    <span>Logout</span>
                    <span className="write"> 
                        <Link to='/write'>Write</Link>
                    </span>
                </div>
            </div> 
        </div>

    )
}

export default Navbar