import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Data Engineer building Python ETL pipelines, Airflow orchestration, and analytics applications. Open to remote roles and relocation.";

export const metadata: Metadata = {
  title: "Bryce Cook – Data Engineer",
  description,
  openGraph: {
    title: "Bryce Cook – Data Engineer",
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryce Cook – Data Engineer",
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bryce Cook",
  jobTitle: "Data Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Knoxville Utilities Board",
  },
  sameAs: [
    "https://github.com/bcook26",
    "https://www.linkedin.com/in/bryce-cook-1a8960168/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
