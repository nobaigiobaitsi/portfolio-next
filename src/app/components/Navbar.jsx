'use client';

import { useState } from "react";
import { HiMenu, HiX, HiOutlineUserCircle, HiHome, HiInformationCircle } from "react-icons/hi";
import { CgClipboard } from "react-icons/cg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a23] text-[#e0e6ed] shadow-md pb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="text-lg font-bold pt-3">
            <HiOutlineUserCircle className="inline-block mr-1 size-6.5" />
            <a href="/">My Portfolio</a>
          </div>

          <div className="hidden md:flex space-x-6 pt-3">
            <div>
              <HiHome className="inline mr-1 size-5" />
              <a href="/" className="hover:underline">Home</a>

            </div>
            <div>
              <CgClipboard className="inline-block mr-1 size-6.5" />
              <a href="/projects" className="hover:underline">Projects</a>
            </div>
            <div>
              <HiInformationCircle className="inline-block mr-1 size-6.5" />
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a23] px-4 pb-4 space-y-2">
          <div>
            <HiHome className="inline mr-1 size-3.5" />
            <a href="/" className="block hover:underline">Home</a>
          </div>
          <div>
            <CgClipboard className="inline mr-1 size-3.5" />
            <a href="/projects" className="block hover:underline">Projects</a>
          </div>
          <div>
            <HiInformationCircle className="inline mr-1 size-3.5" />
            <a href="/contact" className="block hover:underline">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}