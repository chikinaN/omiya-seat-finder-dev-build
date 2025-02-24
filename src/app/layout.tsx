import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { MainNav } from "~/components/mainnav";

export const metadata: Metadata = {
  title: "座席表システム",
  description: "大宮キャンパスの座席表システムです。",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${GeistSans.variable}`}>
      <body className="w-screen h-screen">
        <TRPCReactProvider>
          <header className="border-b fixed w-screen bg-white top-0">
            <div className="container mx-auto px-4">
              <MainNav />
            </div>
          </header>
          <main className="w-full h-full box-border pt-16">{children}</main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
