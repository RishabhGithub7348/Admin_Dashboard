import React, { Suspense } from "react";
import LeftSidebar from "@/components/sidebar/Sidebar";

export default async function BaseComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:container">
      <div className="flex">
        <LeftSidebar />
          {children}
        
      </div>
    </div>
  );
}