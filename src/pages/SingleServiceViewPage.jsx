

import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Input from "../components/Input";
import Pagetitle from "../Hooks/Pagetitle";

export default function SingleServiceViewPage() {
  const { id } = useParams();
  const services = useLoaderData();
  const [SingleService, setSingleService] = useState({});
  const { name, image, price, description, works } = SingleService || {};

  useEffect(() => {
    if (services.length > 0) {
      const matchedService = services.find((ele) => ele.id === id);
      setSingleService(matchedService || {});
    }
  }, [services, id]);

  return (
    <>
      {name && <Pagetitle>{`${name} - Birthday Planner`}</Pagetitle>}

      {/* Banner Section */}
      <PageBanner Banner={image}>
        <div className="grid gap-4 text-white text-center">
          <h2 className="text-5xl font-extrabold">{name || "Service Name"}</h2>
          <p className="text-lg md:text-xl leading-8">
            Experience an unforgettable event with top-tier planning and exceptional service.
          </p>
        </div>
      </PageBanner>

      {/* Service Details and Booking Section */}
      <div
        className="container mx-auto mt-[-80px] p-8 md:p-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-lg lg:flex lg:gap-12"
        style={{ borderTopLeftRadius: "80px", borderBottomRightRadius: "80px" }}
      >
        {/* Service Details */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600 text-lg mt-5">{description}</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">What we do in this service?</h2>
          <p className="text-gray-600 text-lg mt-4">{works || "Details not available."}</p>
        </div>

        {/* Booking Form */}
        <div className="flex-1 mt-8 lg:mt-0">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-gray-800">Book a Date</h3>
              <p className="text-xl font-bold text-gray-700">{price || "Price Not Available"} / 100 Guests</p>
            </div>

            <form className="grid gap-6">
              {/* Input Fields */}
              <Input
                placeholder="Your Name"
                label="Name"
                type="text"
                customcss="border-2 border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
              <Input
                placeholder="Your Phone Number"
                label="Phone"
                type="tel"
                customcss="border-2 border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
              <Input
                placeholder="Your Email"
                label="Email"
                type="email"
                customcss="border-2 border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
              <Input
                placeholder="Pick a Date"
                label="Date"
                type="date"
                customcss="border-2 border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />

              {/* Message Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">Message</span>
                </label>
                <textarea
                  className="textarea border-2 border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 rounded-md"
                  placeholder="Add a special request or message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="btn bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-2 rounded-md shadow-md">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
