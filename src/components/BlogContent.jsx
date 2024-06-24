/* import React from 'react';
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

export default BlogContent */

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

/*
import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Blogs from '../components/Blogs.jsx';
import Footer from '../components/Footer.jsx';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogContent = ({ blogs }) => {
    console.log("Blog Object");

    const { id } = useParams();

    let blog = {};
    if (blogs && blogs.data) {
        let arr = blogs.data.filter(blog => blog.id == id);
        blog = arr[0];
    }

    if (!blog || !blog.attributes) {
        return <div>Blog not found</div>;
    }

    return (
        <div className='w-full pb-10 bg-[#f9f9f9]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3
                md:gap-8 sm:gap-y-8 px-4 md:mt-0 sm:pt-20 text-black'>

                    <div className='col-span-2 gap-x-8 gap-y-8'>
                        <img className='h-56 w-full object-cover' src={`http://localhost:1337/${blog.attributes.coverImg?.attributes?.url}`} alt="Cover" />
                        <h1 className='font-bold text-2xl my-1 pt-5'>{blog.attributes.blogTitle}</h1>
                        <div className='pt-5'><p>{blog.attributes.blogDesc}</p></div>
                        <div className='pt-5'><ReactMarkdown className='line-break'>{blog.attributes.blogContent}</ReactMarkdown></div>
                    </div>

                    <div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[250px]'></div>
                    <div className='w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]'>
                        <img className='p-2 w-32 h-32 rounded-full mx-auto' src={`http://localhost:1337/${blog.attributes.authorImg?.attributes?.url}`} alt="Author" />
                        <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.attributes.authorName}</h1>
                        <p className='text-center text-gray-800 font-medium'>{blog.attributes.authorDesc}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogContent;

*/



/*
import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogContent = ({blogs}) => {
    console.log("Blog Object")

    const {id}=useParams()


    let blog={}
    if(blog){
            let arr = blogs.data.filter(blog=> blog.id == id)
            blog=arr[0]

    }else{
        blog={}
    }

    return ( 
        <div className='w-full pb-10 bg-[#f9f9f9]'>
            <div className='max-w-[1240px] mx-auto'>
                
                <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
                md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
    
                    <div className='col-span-2 '>
                        <img className='h-56 w-full object-cover' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} />
                        <h1 className='font-bold text-2xl my-1 pt-5'>{blog.attributes.blogTitle}</h1>
                    </div>
    
                    <div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[250px]'>
                        <div>
                            <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`} />
                            <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.attributes.authorName}</h1>
                            <p className='text-center text-gray-900 font-medium'>{blog.attributes.authorDesc}</p>
                        </div>
    
                    </div>
    
    
                </div>
    
            </div>
        </div>
)
}

export default BlogContent

*/

import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogContent = ({ blogs }) => {
    console.log("Blog Object");

    const { id } = useParams();

    let blog = {};
    if (blogs && blogs.data) {
        let arr = blogs.data.filter(blog => blog.id == id);
        blog = arr[0];
    } else {
        blog = {};
    }

    const extractText = (content) => {
        if (Array.isArray(content)) {
            return content.map(item => item.children.map(child => child.text).join('')).join('\n\n');
        }
        return content;
    };

    const blogContent = blog.attributes ? blog.attributes.blogContent : '';
    const content = typeof blogContent === 'string' ? blogContent : extractText(blogContent);

    console.log("Blog Content Type:", typeof content);

    return (
        <div className='w-full pb-10 bg-[#f9f9f9]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
                md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
                    <div className='col-span-2 '>
                        {blog.attributes && (
                            <>
                                <img className='h-56 w-full object-cover' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} alt='Cover' />
                                <h1 className='font-bold text-2xl my-1 pt-5'>{blog.attributes.blogTitle}</h1>
                                <div className='pt-5'>
                                    <ReactMarkdown className='line-break'>{content}</ReactMarkdown>
                                </div>
                            </>
                        )}
                    </div>
                    {blog.attributes && (
                        <div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[250px]'>
                            <div>
                                <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`} alt='Author' />
                                <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.attributes.authorName}</h1>
                                <p className='text-center text-gray-900 font-medium'>{blog.attributes.authorDesc}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BlogContent;


