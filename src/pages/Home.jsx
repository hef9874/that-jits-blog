import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    const posts = [
        {
            id: 1,
            title: "Armbars and Headlocks",
            desc: "The best submissions for submitting the your enemies!!!",
            img: "https://picsum.photos/550/300"
        },
        {   
            id: 1,
            title: "Fun Takedowns",
            desc: "Checkout these new takedowns I learned the other day.",
            img: "https://picsum.photos/550/300"
        }

    ]
    return (
        <div className="home">
            <div className="posts">
                {posts.map(post => (
                    <div className="post" key={post.id}>
                        <div className='img'>
                            <img src={post.img} alt=""  />
                        </div>
                        <div className="content">
                            <Link className='link'to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                                <p>{post.desc}</p>
                                <button>Read More</button>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Home