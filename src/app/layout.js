"use client";

import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

import DashboardNavbar from "@/components/core/dashboard-navbar/dashboard-navbar";
import Footer from "@/components/core/footer/footer";
import Navbar from "@/components/core/navbar/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomToaster } from "@/components/ui/customToaster";
import StoreProvider from "@/redux/store-provider";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/react-query/ReactQueryProvider";

const RootLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ReactQueryProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <>
                {pathname.includes("dashboard") ? (
                  <>
                    <DashboardNavbar />
                    {children}
                    <CustomToaster />
                    <Toaster position="top-center" reverseOrder={false} />
                    <Footer />
                  </>
                ) : (
                  <>
                    <Navbar />
                    {children}
                    <CustomToaster />
                    <Toaster position="top-center" reverseOrder={false} />
                    <Footer />
                  </>
                )}
              </>
            </ThemeProvider>
          </ReactQueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
