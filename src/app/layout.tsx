import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LoadingScreenProvider from "@/providers/LoadingScreenProvider";
import BottomMenus from "@/components/layouts/BottomMenus";
import AuthProvider from "@/providers/AuthProvider";
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"

const montserrat = Montserrat({ subsets: ["latin"], variable: '--montserat' });

export const metadata: Metadata = {
  title: "Tap M Boys",
  description: "Embrase the power of community and decentralization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen max-h-screen h-screen`}>
        <AuthProvider>
          <LoadingScreenProvider>
            <main className="h-[calc(100vh-110px)] bg-primary/40 backdrop-blur-[3px] text-white/80 py-10 px-4">
              {children}
            </main>
            <BottomMenus />
          </LoadingScreenProvider>
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
