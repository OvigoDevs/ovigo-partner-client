"use client";

import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/core/navbar/navbar";
import Footer from "@/components/core/footer/footer";
import StoreProvider from "@/redux/store-provider";
import { usePathname } from "next/navigation";
import DashboardNavbar from "@/components/core/dashboard-navbar/dashboard-navbar";

const RootLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <>
              {pathname.includes("dashboard") ? (
                <>
                  <DashboardNavbar />
                  {children}
                  <Toaster />
                  <Footer />
                </>
              ) : (
                <>
                  <Navbar />
                  {children}
                  <Toaster />
                  <Footer />
                </>
              )}
            </>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
