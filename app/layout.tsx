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
  title: "The Wedding of Karima & Salman",
  description: "Sabtu, 6 September 2025",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "The Wedding of Karima & Salman",
    description: "Sabtu, 6 September 2025",
    url: "https://salman-karima.com",
    siteName: "Karima & Salman Wedding",
    images: [
      {
        url: "https://salman-karima.com/thumbnail.jpg",
        width: 500,
        height: 500,
        alt: "The Wedding of Karima & Salman",
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
      <head>
        <meta property="og:title" content="The Wedding of Karima & Salman" />
        <meta property="og:description" content="Sabtu, 6 September 2025" />
        <meta
          property="og:image"
          content="https://salman-karima.com/thumbnail.jpg"
        />
        <meta property="og:url" content="https://salman-karima.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body
        className={`${marcellus.variable} ${poppins.variable} font-poppins font-marcellus antialiased bg-[#e3ddd6]`}
      >
        {children}
      </body>
    </html>
  );
}
