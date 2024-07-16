"use client"
import NavbarForHomePage from "@/components/custom/NavBarForHomePage";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarForHomePage />
        <div>
          {children}
        </div>
    </>
  );
}
