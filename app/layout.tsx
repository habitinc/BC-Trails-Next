import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BC Trails Kiosk Signage Generator | Recreation Sites and Trails BC",
  description: "Sign Generator Tool for BC Trails",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> {/*className="overflow-hidden"*/}
        <TopBar/>

        <main className="flex justify-center items-center flex-1 w-auto overflow-hidden flex-col bg-bcwhite">
          {children}
        </main>
      </body>
    </html>
  );
}