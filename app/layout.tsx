import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Senait Dental Clinic",
  description:
    "Dr. Senait Dental Clinic opened in Addis Ababa in 2016 under the direction of a highly trained and reputable dentist, Dr. Senait Habte, who studied at the world class Tufts University School of Dental Medicine, in Massachusetts, USA. Born and raised in Addis Ababa, Dr. Senait went to the US to pursue higher education. After receiving her Bachelor of Science degree at Indiana-Purdue University Indianapolis (IUPUI), in Indianapolis, Indiana, Dr. Senait engaged in medical research as a McNair Scholar before going on to earn her Doctor of Dental Medicine degree at Tufts University. Dr. Senait practiced dentistry in the US before relocating to Ethiopia with the goal of offering a high-standard, state-of-the-art dental care services in her home country. Dr. Senait Dental Clinic is dedicated to a totally comprehensive dental care approach that focuses on promoting health, rather than just treating the disease. Our goal is to provide a high level of expertise and service to adults and children alike in a comfortable and pleasant professional atmosphere using state-of-the-art technology, equipment and supplies. The Clinic employs cutting edge methods and aims to continuously update the practice to give its patients the highest level of care.",
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
