import React, { useState } from "react";
import { useAuth } from "../hooks/authHooks";

const LoginPage = () => {
  let { navigate, register, handleSubmit, reset, errors, loginForm } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-full overflow-hidden bg-gray-100">
      <div className="flex h-full items-center justify-center px-4">
        <div className="w-full max-w-sm">
          {/* Login Card */}
          <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-7">
            {/* Logo */}
            <div className="mb-4 text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                AG
              </div>
            </div>

            {/* Heading */}
            <div className="mb-5 text-center">
              <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>

              <p className="mt-1 text-sm text-gray-500">
                Login to your account to continue
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(loginForm)} className="space-y-4">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  {...register("email", {
                    required: "email is required",
                  })}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <a
                    href="#"
                    className="text-xs font-medium text-black hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <div className="relative">
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Minimum 8 characters are required",
                      },
                    })}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 pr-16 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 hover:text-black"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                />

                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-black py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.99]"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="my-5 flex items-center">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="px-3 text-xs text-gray-400">OR</span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Google */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <span className="font-bold">G</span>
              Continue with Google
            </button>

            {/* Register */}
            <p className="mt-5 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a
                onClick={() => navigate("/register")}
                className="font-semibold text-black hover:underline"
              >
                Create account
              </a>
            </p>
          </div>

          {/* Footer */}
          <p className="mt-3 text-center text-xs text-gray-400">
            © 2026 Your Store. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
