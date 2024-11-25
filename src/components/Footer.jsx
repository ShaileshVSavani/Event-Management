
import React from "react";
import { Link, useLocation } from "react-router-dom";
import bg_footer from "/images/bg-home.png";
import foterwave from "/images/foterwave.png";

export default function Footer() {
  const { pathname } = useLocation();
  const pathnames = ["/login", "/signup"];

  return (
    <footer
      className={`relative ${
        pathnames.includes(pathname) ? "-mt-72" : "mt-20"
      }`}
    >
      {/* Decorative Wave */}
      <img
        draggable={false}
        className="w-full h-auto"
        src={foterwave}
        alt="Footer wave"
      />

      {/* Footer Background Section */}
      <div
        className="bg-sky-300 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bg_footer})`,
          backgroundPosition: "bottom center",
        }}
      >
        <div className="container mx-auto px-6 py-12 lg:py-16">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-800">
            {/* Get in Touch */}
            <div className="space-y-4">
              <h1 className="text-2xl font-semibold">Get in Touch</h1>
              <p className="text-base">
                Abc Street, Surat, Gujarat, India
              </p>
              <p className="flex items-center text-base">
                <i className="fa-solid fa-envelope mr-3 text-sky-600"></i>
                abc@gmail.com
              </p>
              <p className="flex items-center text-base">
                <i className="fa-solid fa-phone mr-3 text-sky-600"></i>
                (+91) 0123456789
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h1 className="text-2xl font-semibold">Quick Links</h1>
              {["About Us", "Gallery", "Services", "Blogs", "Our Team Members", "Testimonials"].map(
                (link, index) => (
                  <Link
                    key={index}
                    to="/"
                    className="block text-base hover:text-sky-600 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                )
              )}
            </div>

            {/* Important Links */}
            <div className="space-y-4">
              <h1 className="text-2xl font-semibold">Important Links</h1>
              {["About Us", "Terms and Services", "Privacy Policy", "Help and Support", "Contact Us"].map(
                (link, index) => (
                  <Link
                    key={index}
                    to="/"
                    className="block text-base hover:text-sky-600 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                )
              )}
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h1 className="text-2xl font-semibold">Newsletter</h1>
              <p className="text-base">
                Sign up for our newsletter to get updates, insights, and promotions.
              </p>
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full p-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
                />
                <button className="btn btn-primary w-full bg-sky-600 hover:bg-sky-700 text-white rounded-md">
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-10 text-center text-gray-700">
            <hr className="border-gray-300 mb-6" />
            <p className="text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="font-bold"> Event Planner™</span>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
