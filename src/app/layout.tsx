import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ModalProvider } from "@/contexts/ModalContext";
import ContactModal from "./components/ContactModal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Your Strategic Partner for Scalable Solutions",
  description: "At loomstech, we go beyond conventional consulting. We are your trusted partner in designing and crafting powerful software solutions for seamless business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ModalProvider>
          {children}
          <ContactModal />
        </ModalProvider>
      </body>
    </html>
  );
}
