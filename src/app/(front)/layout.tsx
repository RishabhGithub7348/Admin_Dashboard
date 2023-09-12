import "../globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import CustomProvider from "../providers";
import { Sidebar } from "lucide-react";
import BaseContainer from "@/components/base/BaseContainer";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Manage all your users",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CustomProvider>
      <BaseContainer>{children}</BaseContainer>
        <Toaster />
    </CustomProvider>
  );
}
