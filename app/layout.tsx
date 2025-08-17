import type { Metadata } from "next";
import "./globals.css";
import { Marcellus } from "next/font/google";
import { Poppins } from "next/font/google";
import "animate.css";
import "aos/dist/aos.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"], // contoh: regular & semi-bold
  variable: "--font-poppins",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});

export const metadata: Metadata = {
  title: "Wedding Invitation Karima & Salman",
  description: "Undangan pernikahan digital untuk Karima & Salman",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Wedding Invitation Karima & Salman",
    description: "Undangan pernikahan digital untuk Karima & Salman",
    url: "https://salman-karima.com",
    siteName: "Karima & Salman Wedding",
    images: [
      {
        url: "https://salman-karima.com/thumbnail.jpg",
        width: 800,
        height: 800,
        alt: "Karima & Salman Wedding Thumbnail",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${marcellus.variable} ${poppins.variable} font-poppins font-marcellus antialiased bg-[#e3ddd6]`}
      >
        {children}
      </body>
    </html>
  );
}
