import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import RecoilContextProvider from "../providers/recoil-context-provider";
import { Providers } from "../providers/session-provider";
import { Toaster } from "sonner";
import QueryProviders from "@/providers/query-client-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
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
        className={`${geistSans.variable} min-h-[calc(100vh-1px)] font-sans flex flex-col antialiased`}
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
