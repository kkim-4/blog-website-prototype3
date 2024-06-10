import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Blogs from '../components/Blogs.jsx';
import Footer from '../components/Footer.jsx';
import {useParams} from 'react-router-dom';

const BlogContent = ({blogs}) => {
    console.log("Blog Object")
    
    const {id}=useParams()

    let blog={}
    if (blog){
            let arr = blogs.data.filter(blog=> blog.id == id)
            blog = arr[0]

    }else{
        blog={}
    } 

    /* const blogs=[
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

    let blog = blogs.filter(blog => blog.id == id)
    
    blog = blog[0]
    console.log(blog)
 
*/ 

   return (
        <div className='w-full pb-10 bg-[#f9f9f9]'>
            <div className='max-w-[1240 px] mx-auto'> 
                <div className='grid lg:grid-cols-3 md:grid-cols-3 sm-grid-cols-3 ss:grid-cols-1
                md:gap-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>

                        <div className='col-span-2 gap-x-8 gap-y-8'>
                            <img className ='h-56 w-full object-cover' src={`https://locahost1337/${blog.attributes.coverImg.atributes.url}`}/>
                            <h1 className = 'font-bold text-2xl my-1 pt-5'>{blog.attributes.blogTitle}</h1>
                            <div className='pt-5'><p>{blog.attributes.blogDesc}</p></div>

                        </div>

                        <div className='w-full bg-white rounded-xl  overflow-hidden drop-shadow-md py-5 max-h-[250-px]'>
                            <img className='p-2 w-32 h-32 rounded-full mx-auto' src={blog.authorImg} />
                            <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.authorName}</h1>
                            <p className='text-center text-gray-900 font-medium'>{blog.authorDesc}</p>
                        </div>

                </div>

            
            </div>
        </div>
    )


}



export default BlogContent