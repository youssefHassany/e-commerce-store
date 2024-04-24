import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Nav from "@/components/navbar/Nav";
import StoreProvider from "@/state/StoreProvider";
import { Toaster } from "sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Clothes Store",
  description:
    "Discover the epitome of style and comfort at our online clothing boutique. From timeless classics to the latest trends, find your perfect look with our curated collection of apparel for every occasion. Shop now for exclusive deals and effortless elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen w-screen flex flex-col items-center bg-zinc-900 font-sans antialiased overflow-x-hidden",
          fontSans.variable
        )}
      >
        <StoreProvider>
          <Nav />
          {children}
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
