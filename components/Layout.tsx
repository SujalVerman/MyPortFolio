"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const activeTab = pathname === "/" ? "home" : pathname.slice(1);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
        <Navbar activeTab={activeTab} />
        <main className="">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

