"use client";

import AdminNavbar from "@/components/custom/AdminNavbar";
import AdminSidebar from "@/components/custom/AdminSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <AdminNavbar />
        <div className="container flex w-screen gap-10 h-[85vh] mt-28 ">
          <div style={{ width: "20%" }}>
            <AdminSidebar />
          </div>
          <div style={{ width: "80%" }}>{children}</div>
        </div>
      </div>
    </>
  );
}
