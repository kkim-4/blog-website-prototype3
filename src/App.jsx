import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'; // Update the path as per your directory structure
import Homepage from './pages/Homepage.jsx';
import BlogContentPage from './pages/BlogContentPage.jsx';
import SearchResultsPage from './pages/SearchResultsPage.jsx'; // Assuming you have this component
import useFetch from './hooks/useFetch.js';
import Loginsignup from './components/Loginsignup.jsx';
import AboutUs from './pages/AboutUs.jsx'
import Support from './pages/Support.jsx'
import Pricing from './pages/Pricing.jsx';
import Platform from './pages/Platform.jsx';

const App = () => {
  let {loading, data, error} =useFetch('http://localhost:1337/api/blogs?populate=*')
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>
    return ( 
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage blogs={data?data:""} />} />
                <Route path="/blog/:id" element={<BlogContentPage blogs={data?data:""} />} />
                <Route path="/search" element={<SearchResultsPage />} />
                <Route path="/login-signup" element={<Loginsignup />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/support" element={<Support/>} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/platform" element={<Platform />} />
            </Routes>
        </div>
    );
};

export default App;



