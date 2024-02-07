import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trail Signage Generator | Recreation Sites and Trails BC",
  description: "Sign Generator Tool for BC Trails",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="flex justify-center items-center flex-1 pt-24 pb-20 w-auto overflow-hidden flex-col">
        {children}
      </body>
    </html>
  );
}
