import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import State from "../components/context/state";
import Head from "next/head";
import "../../public/css/basic.css";
import "../../public/css/layout.css";
import "../../public/css/blogs.css";
import "../../public/css/ionicons.css";
import "../../public/css/magnific-popup.css";
import "../../public/css/animate.css";
import "../../public/css/gradient.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tom Maenhout",
  description: "Frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <State>
          <body className={inter.className}>{children}</body>
      </State>
    </html>
  );
}
