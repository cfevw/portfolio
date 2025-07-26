import "./globals.css";

import { Inter } from "next/font/google";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cfevw",
  description: "Cfevw's Portfolio Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <!-- Access Counter -->
        <table border="0" cellspacing="0" cellpadding="0"><tr><td align="center"><a href="http://www.rays-counter.com/"><img src="http://www.rays-counter.com/d1300_f6_479/6884a3b7e2a5e/" alt="アクセスカウンター" border="0"></a></td></tr><tr><td align="center"><img src="http://www.rays-counter.com/images/counter_01.gif" border="0"><img src="http://www.rays-counter.com/images/counter_02.gif" border="0"><img src="http://www.rays-counter.com/images/counter_03.gif" border="0"><img src="http://www.rays-counter.com/images/counter_04.gif" border="0" ><img src="http://www.rays-counter.com/images/counter_05.gif" border="0"></td></tr></table>
      </body>
    </html>
  );
}
