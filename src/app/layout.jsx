"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/blocks/navbar/footer/page";
import Navbar from "@/components/blocks/navbar/page";
import "bootstrap/dist/css/bootstrap.min.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="d-flex flex-column min-vh-100">
       
          <Navbar />
          <main className="flex-fill">
            {children}
          </main>
          <Footer />
       
      </body>
    </html>
  );
}
