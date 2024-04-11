import React from "react";
import AuthInput from "@/components/AuthInput";
import SocialButton from "@/components/SocialButton";
import google from "@/assets/icons/google.svg";
import apple from "@/assets/icons/apple.svg";
import AuthButton from "@/components/AuthButton";

export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-stone-50 shadow-lg rounded-lg p-6">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please Sign in to continue
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <SocialButton icon={google} name="Google" />
            <SocialButton icon={apple} name="Apple" />
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-16 bg-gray-300"></span>
            <span className="text-sm font-medium text-gray-500">
              Or use Sneaker Finder account{" "}
            </span>
            <span className="h-px w-16 bg-gray-300"></span>
          </div>
          <div>
            <AuthInput
              type="email"
              label="Email Address"
              placeholder="Enter your email"
              required
            />
            <AuthInput
              type="password"
              label="Password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a className="font-medium text-indigo-600">Forgot Password?</a>
            </div>
          </div>
          <div>
            <AuthButton name="Sign in"/>
          </div>

          <div className="mt-6 text-center">
            <a className="font-medium text-indigo-600">
              No account yet? Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
