"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import pic1 from "../../picture/pic1.avif";

import UseAuthContext from "@/component/useAuthContext/UseAuthContext";
import { useState } from "react";

export default function RegisterPage() {
  const { signUpWithUser, signUpWithGoogle } = UseAuthContext();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    // 🔐 Validation
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return setError("Enter a valid email");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    setError("");

    signUpWithUser(email, password)
      .then((res) => {
        console.log("User created:", res.user);

        // 🚀 Redirect to home page after success
        router.push("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">

      {/* 🔙 Home Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 bg-white shadow px-3 py-2 rounded-full hover:bg-gray-200 transition"
      >
        <Home size={18} />
        <span className="text-sm font-medium">Home</span>
      </Link>

      {/* 🔥 Card */}
      <div className="bg-white shadow-xl rounded-2xl flex overflow-hidden w-[900px]">

        {/* 🖼 Image */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src={pic1}
            alt="register"
            fill
            className="object-cover"
          />
        </div>

        {/* 📋 Form */}
        <div className="w-full md:w-1/2 p-8 space-y-5">

          <h2 className="text-2xl font-bold text-center">
            Create Account 🚀
          </h2>

          <p className="text-sm text-gray-500 text-center">
            Start your journey with us
          </p>

          <form onSubmit={handleRegister} className="space-y-4">

            {/* Email */}
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg p-3 pr-12 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            {/* Register Button */}
            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg hover:opacity-90 transition">
              Register
            </button>

            {/* Google Button */}
            <button
              type="button"
              onClick={signUpWithGoogle}
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Continue with Google
            </button>
          </form>

          {/* Login Link */}
          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-green-600 font-medium">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}