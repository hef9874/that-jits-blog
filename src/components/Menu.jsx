import React from 'react'

const Menu = () => {
    const posts = [
        {
            id: 1,
            title: "Armbars and Headlocks",
            desc: "The best submissions for submitting your enemies!!!",
            img: "https://picsum.photos/400/300"
        },
        {
            id: 2,
            title: "Fun Takedowns",
            desc: "Checkout these new takedowns I learned the other day.",
            img: "https://picsum.photos/400/300"
        }

    ]

    return (
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map(post => (
                <div className='post' key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div >
    );
};



export default Menu