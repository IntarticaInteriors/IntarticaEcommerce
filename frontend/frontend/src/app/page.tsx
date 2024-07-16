"use client"
import React, { useEffect } from "react";
import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";
export default function page() {
  const Router=useRouter();
  useEffect(()=>{
    Router.push('/auth/login');
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     

     
   </main>
  )
}
