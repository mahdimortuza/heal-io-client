"use client"; 
import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/Navbar";
import Link from "next/link";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => { 
  return (
    <>
      <Navbar />
       
      <div> {children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;