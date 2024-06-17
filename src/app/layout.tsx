import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import State from "../components/context/state";

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
