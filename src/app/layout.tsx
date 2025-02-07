import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import StyledComponentsRegistry from "../lib/registry";

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
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
