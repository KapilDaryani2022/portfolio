import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js'
import Header from "./components/Header";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kapildaryani.com"),
  title: "Kapil Daryani | Frontend Engineer",
  description: "Kapil Daryani is a Frontend Engineer specializing in React.js, Next.js, React Native, TypeScript, SEO, responsive UI development, performance optimization, and modern web applications. Explore projects, experience, and skills.",
  keywords: [
    "Kapil Daryani",
    "Frontend Engineer",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Portfolio",
    "Ahmedabad",
  ],
  openGraph: {
    title: "Kapil Daryani | Frontend Engineer",
    description: "Kapil Daryani is a Frontend Engineer specializing in React.js, Next.js, React Native, TypeScript, SEO, responsive UI development, performance optimization, and modern web applications. Explore projects, experience, and skills.",
    url: "https://kapildaryani.com",
    siteName: "Kapil Daryani Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapil Daryani | Frontend Engineer",
    description: "Kapil Daryani is a Frontend Engineer specializing in React.js, Next.js, React Native, TypeScript, SEO, responsive UI development, performance optimization, and modern web applications. Explore projects, experience, and skills.",
  },
  creator: "Kapil Daryani",
  publisher: "Kapil Daryani",
  authors: [
    {
      name: "Kapil Daryani",
      url: "https://kapildaryani.com",
    },
  ],
};

 const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kapil Daryani",
    url: "https://kapildaryani.com",
    image: "https://kapildaryani.com/images/kapil-daryani.jpg",
    jobTitle: "Frontend Engineer",
    description:
      "Frontend Engineer specializing in React.js, Next.js, React Native, TypeScript, and modern web development.",
    email: "mailto:kapildaryani5802@gmail.com",
    sameAs: [
      "https://github.com/KapilDaryani2022",
      "https://www.linkedin.com/in/kapildaryani/",
      "https://www.instagram.com/kapil_daryani05/"
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "SEO",
      "Frontend Development"
    ]
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      <Header />
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          {children} 
        </ThemeProvider>
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
