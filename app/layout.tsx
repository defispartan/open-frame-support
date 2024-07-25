import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Frame Support",
  description: "If Youre Reading This Its An Open Frame",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
