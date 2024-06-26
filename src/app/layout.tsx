import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import Header from "@/global/components/header/Header";
import Footer from "@/global/components/footer/Footer";
import Wrapper from "@/global/components/wrapper/Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
