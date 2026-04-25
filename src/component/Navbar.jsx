"use client"

import Link from "next/link"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar"

import { cn } from "@/lib/utils"

export default function Navbar() {
  return (
    <div className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          MyStore
        </Link>

        {/* Menubar */}
        <Menubar className="rounded-full border px-2 py-1 shadow-sm bg-white/70 backdrop-blur-md">

          {/* Home */}
          <MenubarMenu>
            <MenubarTrigger className="rounded-full px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
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

          {/* Shop */}
          <MenubarMenu>
            <MenubarTrigger className="rounded-full px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
              Shop
            </MenubarTrigger>
            <MenubarContent className="rounded-xl shadow-lg">
              <MenubarItem>
                <Link href="/products" className="w-full">All Products</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/offers" className="w-full">Offers</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* About */}
          <MenubarMenu>
            <MenubarTrigger className="rounded-full px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
              <Link href="/about">About</Link>
            </MenubarTrigger>
          </MenubarMenu>

        </Menubar>

        {/* Right side CTA */}
        <div className="hidden md:flex gap-3">
          <Link
            href="/login"
            className="px-4 py-2 rounded-full border hover:bg-gray-100 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  )
}