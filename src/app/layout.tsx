import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from 'next/font/google'
import Header from "@/components/Header";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Positivus",
  description: "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className}`}
      >
        <Header />
        <main className="mx-5 sm:mx-10 lg:mx-20 mt-5">
          {children}
        </main>
      </body>
    </html>
  );
}
