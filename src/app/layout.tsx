import { Footer } from "@/shared/components/footer/footer";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Digital Money",
  description: "A modern digital banking experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${openSans.variable}  antialiased min-h-dvh grid grid-rows-[auto_1fr_auto] `}
      >
        {children}
        <Toaster
          richColors
        />
        <Footer />
      </body>
    </html>
  );
}
