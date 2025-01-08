
import NavBar from "@/components/Dashboard/NavBar";
import Footer from "@/components/Frontend/Footer";
import { SiteHeader } from "@/components/site-header";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


import React from "react";


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session= await getServerSession(authOptions)
  if(!session){
    redirect(/login)
  }
  return (
  <div className="bg-slate-50">
      <NavBar user= {user}/>
    <div className="bg-cyan-500"> <SiteHeader/></div>
    <div className="p-3">{children}</div> 
    <div className=" bottom-0  bg-gray-800 text-white"><Footer /></div>
  </div>
      
  )}