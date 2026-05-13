import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xilin Wang — Software Engineer",
  description: "Software Engineer specialized in Backend & Distributed Systems at Apple. 3+ years building large-scale data platforms and cloud-native services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
