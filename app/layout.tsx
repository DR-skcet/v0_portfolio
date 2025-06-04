import type React from "react"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  title: "Durairaj S - AI & ML Engineer Portfolio",
  description:
    "Personal portfolio website of Durairaj S - AI & ML Engineer, Full Stack Developer, and Cloud Enthusiast specializing in innovative solutions",
  keywords:
    "AI, Machine Learning, Full Stack Developer, Cloud Computing, Portfolio, Durairaj S, Computer Science, Innovation",
  authors: [{ name: "Durairaj S", url: "https://github.com/DR-skcet" }],
  creator: "Durairaj S",
  metadataBase: new URL("https://durairaj-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://durairaj-portfolio.vercel.app",
    title: "Durairaj S - AI & ML Engineer Portfolio",
    description:
      "Personal portfolio website of Durairaj S - AI & ML Engineer, Full Stack Developer, and Cloud Enthusiast",
    siteName: "Durairaj S Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Durairaj S Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Durairaj S - AI & ML Engineer Portfolio",
    description:
      "Personal portfolio website of Durairaj S - AI & ML Engineer, Full Stack Developer, and Cloud Enthusiast",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={true}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
