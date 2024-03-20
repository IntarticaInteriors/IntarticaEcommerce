"use client";

import AdminNavbar from "@/components/custom/AdminNavbar";
import AdminSidebar from "@/components/custom/AdminSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <AdminNavbar />
        <div className="container flex w-screen gap-5">
          <div style={{ width: "20%" }}>
            <AdminSidebar />
          </div>
          <div style={{ width: "80%" }}>{children}</div>
        </div>
      </div>
    </>
  );
}
