import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sneaker Finder",
  description: "Generated by create next app",
  icons: {
    icon: {
      url: "./favicon.ico",
      href: "./favicon.ico",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
