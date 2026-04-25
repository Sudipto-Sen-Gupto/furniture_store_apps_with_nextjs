"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";

import UseAuthContext from "./useAuthContext/UseAuthContext";

export default function Navbar() {
  const { user, logOut } = UseAuthContext();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          MyStore
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <Menubar className="rounded-full border px-2 py-1 shadow-sm bg-white/70 backdrop-blur-md">

            {/* Home */}
            <MenubarMenu>
              <MenubarTrigger className="px-4 py-2 rounded-full hover:bg-gray-100 transition">
                Home
              </MenubarTrigger>
              <MenubarContent className="rounded-xl shadow-lg">
                <MenubarItem>
                  <Link href="/" className="w-full">Main Home</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/featured" className="w-full">Featured</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            {/* PRODUCTS ONLY */}
            <MenubarMenu>
              <MenubarTrigger className="px-4 py-2 rounded-full hover:bg-gray-100 transition">
                <Link href="/products">Products</Link>
              </MenubarTrigger>
            </MenubarMenu>

            {/* About */}
            <MenubarMenu>
              <MenubarTrigger className="px-4 py-2 rounded-full hover:bg-gray-100 transition">
                <Link href="/about">About</Link>
              </MenubarTrigger>
            </MenubarMenu>

          </Menubar>
        </div>

        {/* Auth (Desktop) */}
        <div className="hidden md:flex items-center gap-3">

          {user ? (
            <>
              <span className="text-sm text-gray-700">{user.email}</span>
              <button
                onClick={logOut}
                className="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded-full border hover:bg-gray-100 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">

          <Link href="/" className="block" onClick={() => setMobileMenu(false)}>
            Home
          </Link>

          <Link href="/featured" className="block" onClick={() => setMobileMenu(false)}>
            Featured
          </Link>

          <Link href="/products" className="block" onClick={() => setMobileMenu(false)}>
            Products
          </Link>

          <Link href="/about" className="block" onClick={() => setMobileMenu(false)}>
            About
          </Link>

          <hr />

          {user ? (
            <>
              <p className="text-sm text-gray-600">{user.email}</p>
              <button
                onClick={() => {
                  logOut();
                  setMobileMenu(false);
                }}
                className="w-full bg-red-500 text-white py-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                onClick={() => setMobileMenu(false)}
                className="block border px-3 py-2 rounded"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setMobileMenu(false)}
                className="block bg-black text-white px-3 py-2 rounded"
              >
                Sign Up
              </Link>
            </>
          )}

        </div>
      )}
    </div>
  );
}