import type { Metadata } from "next";
import "./globals.css";
import iconLight from "@/public/images/icon-light.svg";
import iconDark from "@/public/images/icon-dark.svg";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
    title: "CSS RoadMap",
    description: "Covering all the CSS aspects through the RoadMap",
    icons: [
        {
            media: '(prefers-color-scheme: light)',
            url: iconLight.src
        },
        {
            media: '(prefers-color-scheme: dark)',
            url: iconDark.src
        },
    ]
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="selection:bg-gray-500 selection:text-white">
      <body className="w-full h-full font-sans">
      {children}
      </body>
      </html>
  );
}
