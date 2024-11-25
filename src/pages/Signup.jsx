

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../Context/AuthnicationContext";
import Pagetitle from "../Hooks/Pagetitle";
import Auth_Banner from "/images/Auth_Banner.jpg";

export default function Signup() {
  const [Errors, setErrors] = useState([]);
  const {
    continueWithGoogle,
    continueWithGithub,
    sendeVerificationmail,
    auth,
    Signup,
  } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { Vpath } = state || {};

  const handleWithGoogle = async () => {
    try {
      await continueWithGoogle();
      toast.success(
        `${auth.currentUser?.displayName} registered successfully!`
      );
      navigate(`${Vpath || "/"}`);
    } catch (err) {
      console.error(err);
    }
  };

  const handelesubmit = async (form) => {
    form.preventDefault();
    const username = form.target.username.value;
    const email = form.target.email.value;
    const password = form.target.password.value;

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    const err = [];

    if (username.trim() === "" || typeof username !== "string") {
      err.push("Username is required");
    } else if (username.trim().length < 3 || username.trim().length > 25) {
      err.push("Username should be between 3 and 25 characters");
    }

    if (password.trim() === "") {
      err.push("Password is required");
    } else if (!passwordPattern.test(password)) {
      err.push(
        "Password must include uppercase, lowercase, special character, and be at least 6 characters long"
      );
    }

    if (email.trim() === "") {
      err.push("Email is required");
    } else if (!emailPattern.test(email)) {
      err.push("Provide a valid email address");
    }

    setErrors(err);

    if (err.length === 0) {
      try {
        await Signup(username, email, password);
        toast.success(`${auth.currentUser?.displayName} registered successfully!`);
        navigate(`${Vpath || "/"}`);
      } catch (err) {
        setErrors((prev) => [
          ...prev,
          err.message
            .split("/")[1]
            .replace(/[-)|]/g, " ")
            .replace(").", ""),
        ]);
      }
    }
  };

  return (
    <>
      <Pagetitle>Sign up - Birthday Planner</Pagetitle>

      <div
        style={{
          backgroundImage: `url(${Auth_Banner})`,
        }}
        className="hero pb-40 md:min-h-[1200px] min-h-[1000px] bg-cover bg-center"
      >
        <div className="hero-content">
          <div className="card flex justify-stretch md:w-[500px] min-w-full max-w-2xl shadow-2xl bg-white rounded-lg">
            <div className="card-body p-6">
              <form onSubmit={handelesubmit} className="space-y-6">
                {/* Error Messages */}
                {Errors.length > 0 && (
                  <div className="text-red-600 bg-red-100 p-4 rounded-lg">
                    <ul className="list-disc space-y-2 pl-5">
                      {Errors.map((error, index) => (
                        <li key={index} className="capitalize">
                          {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Username Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-700 font-semibold">
                      Username
                    </span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                {/* Email Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-700 font-semibold">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                {/* Password Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-700 font-semibold">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Create a password"
                    className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                {/* Submit Button */}
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md shadow-lg"
                  >
                    Sign up
                  </button>
                </div>

                {/* Redirect to Login */}
                <p className="text-center mt-4">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    state={{ Vpath }}
                    className="text-orange-600 hover:underline"
                  >
                    Log in
                  </Link>
                </p>
              </form>

              {/* Third-party Signups */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleWithGoogle}
                  className="flex-1 btn bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-md"
                >
                  Sign up with <i className="ml-2 fa-brands fa-google"></i>
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
