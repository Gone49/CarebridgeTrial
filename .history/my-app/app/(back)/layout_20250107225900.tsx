
import NavBar from "@/components/Dashboard/NavBar";
import Footer from "@/components/Frontend/Footer";
import { SiteHeader } from "@/components/site-header";

import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <div className="bg-slate-50">
      <NavBar />
    <div> <SiteHeader/></div>
    <div className="p-3">{children}</div> 
    <div className=" bottom-0  bg-gray-800 text-white"><Footer /></div>
  </div>
      
  )}