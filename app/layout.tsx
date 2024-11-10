import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import RecoilContextProvider from "../providers/recoil-context-provider";
import { Providers } from "../providers/session-provider";
import { Toaster } from "sonner";
import { Roboto } from "next/font/google";
import QueryProviders from "@/providers/query-client-provider";

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

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "testify",
  description: "get the social validation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} min-h-[calc(100vh-1px)] flex flex-col antialiased`}
      >
        <QueryProviders>
          <RecoilContextProvider>
            <Toaster richColors />
            <Providers>{children}</Providers>
          </RecoilContextProvider>
        </QueryProviders>
      </body>
    </html>
  );
}
