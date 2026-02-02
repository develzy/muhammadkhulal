import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mukhamma Lu'lu Khulaluddin | Portfolio",
  description: "Personal website of Mukhammad Lu'lu Khulaluddin - Tenaga Pendidik & Administratif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
