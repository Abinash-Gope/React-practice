import React, { useState } from "react";
import { useAuth } from "../hooks/authHooks";

const RegisterPage = () => {
  let {navigate} = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register submitted");
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-gray-100">
      <div className="flex h-full items-center justify-center px-4 py-4">
        <div className="w-full max-w-md">

          {/* Register Card */}
          <div className="rounded-2xl bg-white px-6 py-5 shadow-xl sm:px-8">

            {/* Logo */}
            <div className="mb-3 flex justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                AG
              </div>
            </div>

            {/* Heading */}
            <div className="mb-4 text-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Create Account
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Sign up to get started with your account
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">

              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Full name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Email address"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                  />
                </div>
              </div>

              {/* Password + Confirm Password */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 pr-14 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 hover:text-black"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>

                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 pr-14 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 hover:text-black"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start pt-1">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-gray-300"
                />

                <label
                  htmlFor="terms"
                  className="ml-2 text-xs leading-5 text-gray-500"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="font-medium text-black hover:underline"
                  >
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-medium text-black hover:underline"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Register */}
              <button
                type="submit"
                className="w-full rounded-lg bg-black py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.99]"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="my-4 flex items-center">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="px-3 text-xs text-gray-400">
                OR
              </span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Google */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <span className="font-bold">G</span>
              Sign up with Google
            </button>

            {/* Login */}
            <p className="mt-4 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                onClick={() => navigate("/")}
                className="font-semibold text-black hover:underline"
              >
                Login
              </a>
            </p>
          </div>

          {/* Footer */}
          <p className="mt-2 text-center text-xs text-gray-400">
            © 2026 Your Store. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;