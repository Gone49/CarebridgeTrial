import Footer from "@/components/Frontend/Footer";
import Navbar from "@/components/Dashboard/NavBar";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <div>
    
    {children} {/* Your app's content */}
  </div>
      
  )}