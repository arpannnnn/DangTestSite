import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/navmenu";
import Footer from "./components/Fotter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " TestSiteDang",
  description: " TestSiteDang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        
      <body className={inter.className}>
        <Navbar />
        <div className="max-h-full mt-24">
        {children}
        
        
      
      </div>
      <Footer />
      </body>
     
    </html>
  );
}
