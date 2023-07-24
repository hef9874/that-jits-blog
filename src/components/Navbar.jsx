import React from 'react'
import Logo from '../jits-blog.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className= 'navbar'>
            <div className='container'>
                <div className='logo'>
                <img src={Logo} alt='logo'></img>
                </div>
                <div className="links">
                    <Link className='link' to='/?cat=submissions'><h6>Submissions</h6></Link>
                    <Link className='link' to='/?cat=warmups'><h6>Drills</h6></Link>
                    <Link className='link' to='/?cat=competing'><h6>Competition</h6></Link>
                    <span>Profile</span>
                    <span>Logout</span>
                    <span className="write"> 
                        <Link className='link' to='/write'>Write</Link>
                    </span>
                </div>
            </div> 
        </div>

    )
}

export default Navbar