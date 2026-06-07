import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { path: "/", title: "Start a search" },
        { path: "/my-jobs", title: "My Jobs" },
        { path: "/post-job", title: "Post A Job" },
    ];

    return (
        <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
            
            <nav className="flex justify-between items-center py-6">

                {/* LOGO */}
                <Link to="/" className="flex items-center gap-2 text-2xl text-black">
                    <img src={logo} alt="logo" className="w-10 h-10" />
                    <span>JobSpring</span>
                </Link>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex gap-12">
                    {navItems.map(({ path, title }) => (
                        <li key={title} className="text-base text-primary">
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? "text-blue-500 font-semibold" : ""
                                }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* AUTH BUTTONS */}
                <div className="hidden md:flex text-base font-medium space-x-5">
                    <Link to="/login" className="py-2 px-5 border rounded">
                        Log in
                    </Link>
                    <Link
                        to="/signup"
                        className="py-2 px-5 border rounded bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        Signup
                    </Link>
                </div>

                {/* MOBILE BUTTON */}
                <div className="md:hidden block">
                    <button onClick={handleMenuToggler}>
                        {isMenuOpen ? (
                            <FaTimes className="w-5 h-5" />
                        ) : (
                            <FaBars className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-black py-5 px-4 rounded-sm`}>
                <ul>
                    {navItems.map(({ path, title }) => (
                        <li key={title} className="text-white py-2">
                            <NavLink to={path}>{title}</NavLink>
                        </li>
                    ))}

                    <li className="text-white py-2 flex gap-4">
                        <Link to="/login">Log in</Link>
                        <Link to="/signup">Signup</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;