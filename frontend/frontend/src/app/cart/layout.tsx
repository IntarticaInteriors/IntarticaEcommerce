"use client";
import React from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  BreadcrumbItem,
  Breadcrumbs,
} from "@nextui-org/react";
import NavBarForHomePage from "@/components/custom/NavBarForHomePage";
import { cart, checkout, completed } from "@/components/custom";
import { usePathname } from "next/navigation";
const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  console.log("this is path", pathname);
  // Define a function to render content based on the current route
  const renderContent = () => {
    switch (pathname) {
      case "/cart/shopping":
        return "Cart";
      case "/cart/checkout":
        return "Checkout";
      case "/cart/completed":
        return "Completed";
      default:
        return <div>Page not found</div>;
    }
  };
  const title=renderContent();
  // const disabledItems = ["checkout", "completed"];
  const disabledItems = [];

  return (
    <>
      <NavBarForHomePage />
      <div className="container m-10">
        <div className="flex justify-center">
          <Breadcrumbs variant="solid" size="lg">
            <BreadcrumbItem>Shopping</BreadcrumbItem>
            <BreadcrumbItem>{renderContent()}</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <Tabs disabledKeys={disabledItems} selectedKey={pathname} aria-label="Disabled Options">
          <Tab key="/cart/shopping" title="Step 1: Shopping Cart" href="/cart/shopping">
            <div>{children}</div>
          </Tab>
          <Tab key="/cart/checkout" title="Step 2: Checkout" href="/cart/checkout">
            <div>{children}</div>
          </Tab>
          <Tab key="/cart/completed" title="Step 3: Completed" href="/cart/completed">
            <div>{children}</div>
          </Tab>
        </Tabs>
      </div>
      {/* <div>{children}</div> */}
    </>
  );
};

export default layout;
