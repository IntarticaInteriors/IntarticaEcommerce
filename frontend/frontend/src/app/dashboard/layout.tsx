"use client"
import Navbar from "@/components/custom/Navbar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <div>
          <Navbar />
          {children}
        </div>
    </>
  );
}
