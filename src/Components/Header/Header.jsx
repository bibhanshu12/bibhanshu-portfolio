import  { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0 border-b-2 bg-[#010C1D]">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo/Portfolio - Always visible */}
                    <Link to="/" className="flex items-center">
                        <h1 className="font-bold flex justify-center items-center text-white text-3xl">
                            Portfolio
                        </h1>
                    </Link>

                    {/* Hamburger Menu Button - Only visible on mobile */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-white hover:text-gray-300 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>

                    {/* Projects button - Hidden on mobile */}
                    <div className="hidden lg:flex items-center lg:order-2">
                        <Link
                            to="resume"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                          Resume
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div
                        className={`${
                            isMenuOpen ? 'block' : 'hidden'
                        } w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {/* Mobile-only Projects button */}
                            <li className="lg:hidden">
                                <Link
                                    to="resume"
                                    className="block py-2 pr-4 pl-3 text-white bg-orange-700  hover:bg-orange-800"
                                >
                                    Resume
                                </Link>
                            </li>

                            {/* Navigation Links */}
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-blue-600" : "text-white"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-blue-600" : "text-white"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="projects"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-blue-600" : "text-white"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-blue-600" : "text-white"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;