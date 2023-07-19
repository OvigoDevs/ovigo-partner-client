import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/core/navbar/navbar";
import Footer from "@/components/core/footer/footer";
import StoreProvider from "@/redux/store-provider";

const APP_NAME = "Ovigo";
const APP_DEFAULT_TITLE = "Ovigo";
const APP_TITLE_TEMPLATE = "Ovigo";
const APP_DESCRIPTION = "Ovigo - Smart Bangladesh smart tourism";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  themeColor: "#FFFFFF",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
};

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
