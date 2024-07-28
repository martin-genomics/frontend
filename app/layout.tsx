import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { Inter as FontSans } from "next/font/google"
import ThemeWrapper from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        >
          <Toaster/>
          <ThemeWrapper>
            {children}
          </ThemeWrapper>
        </body>
    </html>
  );
}
