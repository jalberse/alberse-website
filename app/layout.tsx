import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/navbar";
import "../public/css/main.css";
import "../public/css/syntax.css";

const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "John Alberse",
  description: "John Alberse's personal website on the World Wide Web: code and art galore!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} site md`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
