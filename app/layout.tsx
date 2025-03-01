import type { Metadata } from "next";
import { Archivo, Archivo_Black, Archivo_Narrow, Chivo_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"]
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"]
});

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"]
})

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Hi, I'm Fran",
  description: "Francisco Cano Brusa - personal website and blog",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${archivoBlack.variable} ${archivoNarrow.variable} ${chivoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
