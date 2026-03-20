import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HomeHabit — Intelligent Living",
  description:
    "Custom home automation — from AI voice interfaces and plant monitoring networks to immersive light, laser, and projection environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
