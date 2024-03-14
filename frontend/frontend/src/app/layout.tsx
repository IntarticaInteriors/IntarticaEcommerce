"use client"
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { UserContext } from "@/contexts/userContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserContext.Provider value={{ name: "sumedh" }}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
      </UserContext.Provider>

  );
}
