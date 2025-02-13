import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Senait Dental Clinic",
  description:
    "Dr. Senait Dental Clinic - Premier dental care in Addis Ababa. State-of-the-art technology and comprehensive dental services by US-trained Dr. Senait Habte.",
  keywords: [
    "dental clinic",
    "dentist",
    "Addis Ababa",
    "Dr. Senait Habte",
    "dental care",
    "oral health",
    "dental services",
    "Ethiopia dentist",
  ],
  authors: [{ name: "Dr. Senait Habte" }],
  creator: "Dr. Senait Habte",
  publisher: "Dr. Senait Dental Clinic",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drsenait-website.vercel.app",
    siteName: "Dr. Senait Dental Clinic",
    title: "Dr. Senait Dental Clinic - Premier Dental Care in Addis Ababa",
    description:
      "Experience world-class dental care at Dr. Senait Dental Clinic in Addis Ababa. US-trained dentist providing comprehensive dental services.",
    images: [
      {
        url: "/banner.jpg", // Add your actual image path
        width: 1200,
        height: 630,
        alt: "Dr. Senait Dental Clinic",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  alternates: {
    canonical: "https://drsenait-website.vercel.app",
  },
  themeColor: "#118c90",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    `,
          }}
        />
      </head>
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
