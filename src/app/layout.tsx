import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/library/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CHICOZ CSS VAULT — Pure CSS Effect Library",
  description:
    "Browse, preview and copy 100+ hand-crafted pure CSS effects: buttons, loaders, text animations, backgrounds, cards and utilities. Live demos with complete CSS and HTML code.",
  keywords: [
    "CSS effects",
    "CSS animations",
    "CSS library",
    "hover effects",
    "loaders",
    "text effects",
    "CSS backgrounds",
    "copy paste CSS",
  ],
  authors: [{ name: "CHICOZ CSS VAULT" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "CHICOZ CSS VAULT — Pure CSS Effect Library",
    description:
      "Live-demonstrated pure CSS effects with complete, copy-paste ready code.",
    siteName: "CHICOZ CSS VAULT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
