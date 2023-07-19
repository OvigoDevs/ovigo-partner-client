import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/core/navbar/navbar";
import Footer from "@/components/core/footer/footer";
import StoreProvider from "@/redux/store-provider";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <>
              <Navbar />
              {children}
              <Toaster />
              <Footer />
            </>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
