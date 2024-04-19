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
const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const disabledItems = ["checkout", "completed"];

  return (
    <>
      <NavBarForHomePage />
      <div className="container m-10">
        <div className="flex justify-center">
          <Breadcrumbs variant="solid" size="lg">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Cart</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <Tabs disabledKeys={disabledItems} aria-label="Disabled Options">
          <Tab key="photos" title="Step 1: Shopping Cart">
            <div>
              {/* <divBody> */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              {/* </divBody> */}
            </div>
          </Tab>
          <Tab key="checkout" title="Step 2: Checkout">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="completed" title="Step 3: Completed">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      <div>{children}</div>
    </>
  );
};

export default layout;
