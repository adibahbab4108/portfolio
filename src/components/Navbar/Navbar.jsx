/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './Navbar.css'
const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Education' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <div className=''>
            <div className="navbar shadow-sm ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <ul className="sm:flex  gap-4 items-center font-bold justify-between ">
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <a
                                            href={`#${section.id}`}
                                            className={`hover:text-purple-600 transition-colors 
                                                ${activeSection === section.id ? 'text-purple-600 font-bold' : 'text-white'}`}
                                        >
                                            {section.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                    </div>
                    <a className="btn text-xl">Adib</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <ul className="sm:flex  gap-4 items-center font-bold justify-between ">
                            {sections.map((section) => (
                                <li key={section.id}>
                                    <a
                                        href={`#${section.id}`}
                                        className={`hover:text-purple-600 transition-colors ${activeSection === section.id ? 'text-purple-600 font-bold' : 'text-white'
                                            }`}
                                    >
                                        {section.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* Resume */}
                    <button className="customized-btn">
                        Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;