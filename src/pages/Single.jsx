import React from 'react'
import { FaPen } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Menu from "../components/Menu";

const Single = () => {
    return (
        <div className='single'>
            <div className='content'>
                <img src="https://picsum.photos/400/300" />
                <div className='user'>
                <img src="https://picsum.photos/60/60"></img>
                <div className='info'>
                    <span>Hannah F.</span>
                    <p>Posted 3 days ago</p>
                </div>
                <div className="edit">
                    <Link to='/write?edit=2'>
                    <FaPen style={{fill:'black'}}/>
                    </Link>
                    <FaTrash style={{fill:'black'}}/>
                </div>
                </div>
                <h1>Rolling with the Homies</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempore recusandae ab labore, veritatis aliquam voluptatibus dolores perferendis ad repudiandae? Eligendi ratione neque mollitia ab similique doloremque aut culpa eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis reprehenderit officiis dolor voluptate minus! Quis, odio placeat, fugiat ratione id porro veritatis, nesciunt at odit ad eaque in ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure quis voluptatem at, debitis eveniet alias aut. Laudantium consequuntur, doloribus fuga soluta fugit minus ex non voluptas distinctio provident eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, deleniti culpa minima impedit incidunt illum nesciunt laudantium similique eveniet cum esse fugiat aspernatur obcaecati dolore dolorum modi quia quae, recusandae nam aliquid natus quasi. Numquam quod consectetur vel fuga perferendis. Nulla dolorem eligendi porro laboriosam.</p>
            </div>
            <Menu />
        </div>
    )
}

export default Single