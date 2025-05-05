import "../globals.css";
import Sidebar from "@/components/Sidebar";

const navItems = [
  { path: "/dashboard/profile", label: "Profile" },
  { path: "/dashboard/metrics", label: "Metrics" },
  { path: "/dashboard/charts", label: "Charts" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar navItems={navItems} />
      {children}
    </>
  );
}
