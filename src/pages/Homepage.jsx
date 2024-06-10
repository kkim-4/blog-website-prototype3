import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Blogs from '../components/Blogs.jsx';
import Footer from '../components/Footer.jsx';


const Homepage = ({blogs}) => {
    
    
    return (
        <div>
            <Navbar />
            <Blogs blogs={blogs} />
            <Footer />
        </div>
    )
}

export default Homepage