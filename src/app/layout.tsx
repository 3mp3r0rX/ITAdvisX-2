import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import { Analytics } from "@vercel/analytics/react"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "ITAdvisX",
  description: "The best application for awesome things",
  keywords: "nextjs, application, awesome",
};


export const generateViewport = () => ({
  viewport: "width=device-width, initial-scale=1",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        {generateViewport().viewport && (
          <meta name="viewport" content={generateViewport().viewport} />
        )}
      </head>
      <body className={clsx(dmSans.className, "antialiased")}>
        {children}
        <CookieConsent />
        <Analytics />
        </body>
    </html>
  );
}
