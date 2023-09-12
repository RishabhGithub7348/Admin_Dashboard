"use client";
import React from "react";
import Image from "next/image";
import SideBarLinks from "./SideBarLinks";

export default function LeftSidebar() {
  return (
    <div className="h-screen border-r-2 w-[200px]   md:pt-5  hidden md:block">
      <div className="flex justify-start items-center">
        <Image src="/images/icon.jpg" width={50} height={50} alt="logo" />
        <h1 className="font-bold text-xl ml-2">Admin Dashboard</h1>
      </div>
      <SideBarLinks />
    </div>
  );
}