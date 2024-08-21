import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Application",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <NavBar />
        { children }
      </body>
    </html>
  );
}
