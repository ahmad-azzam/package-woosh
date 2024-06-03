"use client";

import { Navbar, Sidebar } from "@/ui/layout/main";
import { StyleProvider, createCache } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import React from "react";
import type Entity from "@ant-design/cssinjs/es/Cache";

type AuthenticatedLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function AuthenticatedLayout({
  children,
}: AuthenticatedLayoutProps) {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  return (
    <>
      <Sidebar />
      <div className="flex flex-col w-full md:pl-72">
        <Navbar />
        <div className="bg-gray-50">
          <div className="p-4">
            <StyleProvider cache={cache} hashPriority="high">
              <ConfigProvider>{children}</ConfigProvider>
            </StyleProvider>
          </div>
        </div>
      </div>
    </>
  );
}
