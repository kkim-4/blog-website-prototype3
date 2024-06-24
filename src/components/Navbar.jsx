import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import logo from '../assets/logo1.svg';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    };

    const items = ['Home', 'About', 'Support', 'Platform', 'Pricing'];

    return (
        <>
            <div className='w-full h-[80px] z-50 bg-white fixed top-0 left-0 drop-shadow-lg'>
                <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
                    <div className='flex items-center'>
                        <Link to="/">
                            <img src={logo} alt="logo" className='ml-4 md:ml-3 opacity-[55%] w-[100px] h-[25px]' />
                        </Link>
                    </div>
                    <div className='hidden md:flex items-center'>
                        <ul className='flex'>
                            {items.map((item, index) => (
                                <li key={index} className='mr-14'>
                                    {item === 'Home' ? (
                                        <Link to="/" className="text-black">Home</Link>
                                    ) : item === 'About' ? (
                                        <Link to="/about-us" className="text-black">About</Link>
                                    ) : item === 'Support' ? (
                                        <Link to="/support" className="text-black">Support</Link>
                                    ) : item === 'Pricing' ? (
                                        <Link to="/pricing" className="text-black">Pricing</Link>
                                    ) : item === 'Platform' ? (
                                        <Link to="/platform" className="text-black">Platform</Link>
                                    ) : (
                                        item
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='hidden md:flex items-center'>
                        <SearchBar />
                    </div>
                    <div className='hidden md:flex items-center'>
                        <Link to="/login-signup" className='border-none bg-transparent text-black mr-4'>Login</Link>
                        <Link to="/login-signup" className='px-4 py-2 bg-blue-500 text-white rounded-lg'>Sign Up</Link>
                    </div>
                    <div className='md:hidden'>
                        <button className='bg-transparent text-black mr-4' onClick={handleClick}>Menu</button>
                    </div>
                </div>
                <ul className={toggle ? 'absolute bg-white w-full px-8 md:hidden' : 'hidden'}>
                    {items.map((item, index) => (
                        <li key={index} className='py-2'>{item}</li>
                    ))}
                    <div className='flex flex-col my-4'>
                        <Link to="/login-signup" className='bg-transparent text-black mb-4 py-3 px-8'>Login</Link>
                        <Link to="/login-signup" className='px-8 py-3 bg-blue-500 text-white rounded-lg'>Sign Up</Link>
                    </div>
                </ul>
            </div>
            <div className='content mt-10 md:mt-20'>
                {/* Your page content here */}
            </div>
        </>
    );
};

export default Navbar;


