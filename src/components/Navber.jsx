
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../Context/AuthnicationContext";
import UserAvatar from "./UserAvatar";
import logo from "/images/event logo.png";

export default function Navbar() {
  const { Cureentuser } = useAuth();
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border-b-2 border-orange-500"
              : "hover:text-orange-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border-b-2 border-orange-500"
              : "hover:text-orange-500"
          }
        >
          Services
        </NavLink>
      </li>
    
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border-b-2 border-orange-500"
              : "hover:text-orange-500"
          }
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border-b-2 border-orange-500"
              : "hover:text-orange-500"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactus"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border-b-2 border-orange-500"
              : "hover:text-orange-500"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white fixed w-full z-50 shadow-lg">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full container mx-auto navbar">
            {/* Logo */}
            <div className="flex-1 px-2 mx-2 flex items-center">
              <Link to="/">
                <img className="h-14" src={logo} alt="Event Logo" />
              </Link>
              <span className="ml-2 text-2xl font-bold text-orange-400">
                EventPro
              </span>
            </div>
            {/* Links for Desktop */}
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal space-x-6 font-semibold text-lg">
                {links}
              </ul>
            </div>
            {/* Auth Buttons */}
            {!Cureentuser?.displayName && (
              <Link
                to="/login"
                className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md"
              >
                Log In
              </Link>
            )}
            {Cureentuser?.displayName && (
              <div className="hidden lg:block">
                <UserAvatar />
              </div>
            )}
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F45C35"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
        {/* Mobile Drawer Menu */}
        <div className="drawer-side lg:hidden">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-gray-800 text-white space-y-4 text-xl">
            {/* Close Button */}
            <div className="absolute top-4 right-4">
              <label htmlFor="my-drawer-3">
                <i className="fas fa-times text-2xl text-orange-500"></i>
              </label>
            </div>
            {links}
            {!Cureentuser?.displayName && (
              <Link
                to="/login"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md"
              >
                Log In
              </Link>
            )}
            {Cureentuser?.displayName && <UserAvatar />}
          </ul>
        </div>
      </div>
    </header>
  );
}
