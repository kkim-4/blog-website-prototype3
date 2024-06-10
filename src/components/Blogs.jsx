import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = ({blogs}) => {
    console.log("Blog Object")
    console.log(blogs)

    const blogs1 = [
        {
            "id":1,
            'title':'Blog 1',
            'desc':'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quaerat ducimus tenetur corporis quidem esse deleniti doloribus, voluptates, vel nostrum odit consequatur ex non dolorem quos, mollitia vero necessitatibus quae!',
            'coverImg': 'https://miro.medium.com/v2/resize:fit:1358/1*tPyUlbDoxXI4k-X3QIuimA.png',
            'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nostrum odit iste quidem recusandae culpa dolor maxime ipsum autem cum. Ipsum quam saepe fuga, odio commodi adipisci quia debitis tenetur.',
            'authorName':'John Doe',
            'authorImg': 'https://miro.medium.com/v2/resize:fit:1358/1*tPyUlbDoxXI4k-X3QIuimA.png',
            'authorDesc':'Web Developer'
        },
        {
            "id":2,
            'title':'Blog 2',
            'desc':'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quaerat ducimus tenetur corporis quidem esse deleniti doloribus, voluptates, vel nostrum odit consequatur ex non dolorem quos, mollitia vero necessitatibus quae!',
            'coverImg': 'https://miro.medium.com/v2/resize:fit:1358/1*tPyUlbDoxXI4k-X3QIuimA.png',
            'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nostrum odit iste quidem recusandae culpa dolor maxime ipsum autem cum. Ipsum quam saepe fuga, odio commodi adipisci quia debitis tenetur.',
            'authorName':'John Doe',
            'authorImg': 'https://miro.medium.com/v2/resize:fit:1358/1*tPyUlbDoxXI4k-X3QIuimA.png',
            'authorDesc':'Web Developer'
        },
        {
            "id":3,
            'title':'Blog 3',
            'desc':'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quaerat ducimus tenetur corporis quidem esse deleniti doloribus, voluptates, vel nostrum odit consequatur ex non dolorem quos, mollitia vero necessitatibus quae!',
            'coverImg': 'https://miro.medium.com/v2/resize:fit:1358/1*tPyUlbDoxXI4k-X3QIuimA.png',
            'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nostrum odit iste quidem recusandae culpa dolor maxime ipsum autem cum. Ipsum quam saepe fuga, odio commodi adipisci quia debitis tenetur.',
            'authorName':'John Doe',
            'authorImg': 'https://miro.medium.com/v2/resize:fit:1358/1*tPyUlbDoxXI4k-X3QIuimA.png',
            'authorDesc':'Web Developer'
        },
        {
            "id":4,
            'title':'Blog 4',
            'desc':'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quaerat ducimus tenetur corporis quidem esse deleniti doloribus, voluptates, vel nostrum odit consequatur ex non dolorem quos, mollitia vero necessitatibus quae!',
            'coverImg': 'https://miro.medium.com/v2/resize:fit:1358/1*tPyUlbDoxXI4k-X3QIuimA.png',
            'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nostrum odit iste quidem recusandae culpa dolor maxime ipsum autem cum. Ipsum quam saepe fuga, odio commodi adipisci quia debitis tenetur.',
            'authorName':'John Doe',
            'authorImg': 'https://miro.medium.com/v2/resize:fit:1358/1*tPyUlbDoxXI4k-X3QIuimA.png',
            'authorDesc':'Web Developer'
        },
    ]

    return (
        <div className='w-fullbg-[#f9f9f9] py-[50px]'>
            <div className='max-w-[1240-px] mx-auto'>
                <div className = 'grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>
                    
                    
                {blogs.data.map((blog)=>
                    <Link key={blog.id} to={`/blog/${blog.id}`}>
                        <div className = 'bg-white rounded-x1 overflow-hidden drop-shadow-md'>
                            <img className= 'h-56 w-full object-cover' src={`https://locahost:1337/${blog.attributes.coverImg.atributes.url}`}/>
                            <div className ='p-8'> 
                                <h3 className='font-bold-text-2xl my-1'>{blog.attributes.blogTitle}</h3>
                                <p className= 'text-gray-600 text-xl'>{blog.attributes.blogDesc}</p>
                            </div>
                        </div>
                    </Link>
                
                )}



                </div>

            </div>
        </div>
    )
}

export default Blogs