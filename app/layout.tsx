import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { ThemeSwitch } from "@/components/theme-switch";

export const metadata: Metadata = {
  title: "Cek Oshi Online",
  description: "Cek oshi yang ada pada tubuh seseorang melalui nama.",
  keywords: [
    "cek oshi",
    "oshi",
    "cek khodam oshi",
    "cek oshi online",
    "website cek oshi",
    "cek oshi nama",
    "cek oshi tubuh",
    "cek oshi orang",
    "cek oshi orang lain",
    "cek oshi seseorang",
    "cek oshi orang lain online",
    "cek oshi orang lain gratis",
    "check oshi",
    "oshi check",
    "oshi check online",
    "oshi khodam online",
    "oshi khodam nama",
  ],
  authors: [
    {
      name: "Coding with Afrizal Modify by @vrsyvubyv",
      url: "cekoshi.vercel.app",
    },
  ],
  creator: "Coding with Afrizal Modify by @vrsyvubyv",
  openGraph: {
    title: "Cek Oshi Online",
    description: "Cek oshi yang ada pada tubuh seseorang melalui nama.",
    url: `${process.env.HOST_APP_URL}`,
    siteName: "Cek Khodam Online",
    images: [
      {
        url: `${process.env.SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Cek Oshi Online",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "Cek Oshi Online",
    title: "Cek oshi Online",
    description: "Cek oshi yang ada pada tubuh seseorang melalui nama.",
    creator: "@aafrzl_ & @vrsyvubyv",
    images: [
      {
        url: `${process.env.SITE_URL}/og-image.png`,
        alt: "Cek Oshi Online",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
    >
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow h-full flex items-center justify-center">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center flex-col py-3 gap-3">
              <ThemeSwitch />
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href={siteConfig.links.github}
                title="GitHub"
              >
                <span className="text-default-600">Developed by</span>
                <p className="text-primary">Coding with Afrizal Modify by @vrsyvubyv</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
