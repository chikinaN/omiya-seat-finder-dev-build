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
      <body>
        <TRPCReactProvider>
          <header className="border-b">
            <div className="container mx-auto px-4">
              <MainNav />
            </div>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
          <footer className="border-t py-4">
            <div className="container mx-auto px-4 text-center text-sm text-gray-600">© 2024 座席表管理システム</div>
          </footer>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
