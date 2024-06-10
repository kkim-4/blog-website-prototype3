import React from 'react';
import Navbar from '../components/Navbar.jsx';
import BlogContent from '../components/BlogContent.jsx';
import Footer from '../components/Footer.jsx';

const BlogContentPage = ({blogs}) => {
    console.log(blogs)
    return (
        <div>
            <Navbar />
            <BlogContent blogs={blogs} />
            <Footer />
        </div>
    ) 
} 

export default BlogContentPage 