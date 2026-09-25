import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { ToastProvider } from "@/components/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// www is the canonical serving host (the apex host 308s to www).
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.prolab-academy.site"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "PROlab Academy — курсы веб-разработки",
  description: "PROlab Academy — учебные материалы по веб-разработке: HTML, CSS, JavaScript и DOM. Бесплатные курсы для начинающих в Оше, Кыргызстан.",
  keywords: [
    "PROlab Academy",
    "PROLAB Academy",
    "PROLAB Ош",
    "PROLAB Кыргызстан",
    "PROLAB обучение",
    "PROLAB курсы",

    "обучение веб-разработке",
    "обучение в Оше",
    "Кыргызстан образование",
    "PROlab Ош",
    "академия",
    "курсы HTML",
    "курсы CSS",
    "курсы JavaScript",
    "основы программирования",
    "учебные материалы по веб-разработке",
    "академия программирования Ош",
    "IT курсы Ош",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "PROlab Academy — курсы веб-разработки",
    description: "PROlab Academy — учебные материалы по веб-разработке: HTML, CSS, JavaScript и DOM.",
    type: "website",
    url: SITE_URL,
    siteName: "PROlab Academy",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "PROlab Academy — курсы веб-разработки",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROlab Academy — курсы веб-разработки",
    description: "PROlab Academy — учебные материалы по веб-разработке: HTML, CSS, JavaScript и DOM.",
    images: ["/hero-image.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'system';
                  var resolved = theme === 'system'
                    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                    : theme;
                  document.documentElement.classList.add(resolved);
                  document.documentElement.classList.add('no-transition');
                  setTimeout(function() { document.documentElement.classList.remove('no-transition'); }, 300);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
        <ToastProvider />
      </body>
    </html>
  );
}
