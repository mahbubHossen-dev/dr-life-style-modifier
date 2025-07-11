import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/shared/Footer";
import { DarkModeProvider } from "@/shared/DarkMoodContext";
import Navbar from "@/shared/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MD ABDUL KAIYUM",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-gray-900 dark:text-white`}
      >

        <DarkModeProvider>
          <Navbar />
          {children}
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
