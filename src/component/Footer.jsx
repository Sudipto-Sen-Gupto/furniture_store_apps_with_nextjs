"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Brand */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          MyStore
        </h1>

        {/* Links */}
        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/featured" className="hover:text-white transition">
            Featured
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} MyStore
        </p>

      </div>

    </footer>
  );
}