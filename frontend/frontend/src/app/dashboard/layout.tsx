"use client"
import NavbarForHomePage from "@/components/custom/NavBarForHomePage";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <div>
          <NavbarForHomePage />
          {children}
        </div>
    </>
  );
}
