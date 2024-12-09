

import Navbar from "@/components/Frontend/Navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content   Native Navbaar */}
      <main className="flex-gr">{children}</main>              

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
