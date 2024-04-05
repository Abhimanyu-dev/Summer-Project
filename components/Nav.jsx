"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  if(typeof window !== 'undefined'){
    window.addEventListener('scroll', () => {
      var nav = document.getElementById('nav')
      if(window.scrollY > 0){
        var classList = ['flex-between w-full py-3 px-6 fixed top-0 z-10 border-b border-gray-200 transition-all bg-white/0 backdrop-blur shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]']
        nav.classList = classList
      }else{
        var classList = ['flex-between w-full py-3 px-6 fixed top-0 z-10 transition-all']
        nav.classList = classList
      }
    })
  }

  return (
    <nav className="flex-between w-full py-3 px-6 fixed top-0 z-10 transition-all h-[5rem]" id="nav" >
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="LOGO"
          width={35}
          height={35}
          className="object-container"
        />
        <p className="logo_text orange_gradient">Mail</p>
      </Link>
      <div className="sm:flex ">
        <div className="flex gap-3 md:gap-5">
          <Link href="/mail/compose" className="outline_btn">
            <p className="blue_gradient">Compose</p>
          </Link>
        </div>
      </div>

    </nav>
  );
};

export default Nav;

