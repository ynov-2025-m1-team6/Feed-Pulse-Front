import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nabvar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navItems = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/auth/login", label: "Login" },
  { path: "/auth/register", label: "Register" },
];

export const metadata: Metadata = {
  title: "Feed Pulse",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar navItems={navItems} />
        <main>{children}</main>
      </body>
    </html>
  );
}
