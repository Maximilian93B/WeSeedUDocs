import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WeSeedU - Sustainable Investment Platform",
  description: "WeSeedU is an early-stage investment platform focused on sustainable innovation and technology startups. Connect with purpose-driven founders and make values-aligned investments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
        style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
