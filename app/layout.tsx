import type { Metadata } from "next";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LKM Architecture | Architecture, Development & Design",
    template: "%s | LKM Architecture",
  },
  description:
    "LKM Architecture is a Kenya-based architecture and design practice creating places with purpose, character and lasting value.",
  keywords: [
    "LKM Architecture",
    "architects in Kenya",
    "architecture Kenya",
    "Nairobi architects",
    "architectural design Kenya",
    "interior architecture Kenya",
    "masterplanning Kenya",
    "design and build Kenya",
  ],
  authors: [
    {
      name: "LKM Architecture",
    },
  ],
  creator: "LKM Architecture",
  metadataBase: new URL("https://www.lkmarchitecture.com"),
  openGraph: {
    title: "LKM Architecture | Architecture, Development & Design",
    description:
      "Creating places with purpose, character and lasting value.",
    url: "https://www.lkmarchitecture.com",
    siteName: "LKM Architecture",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "LKM Architecture | Architecture, Development & Design",
    description:
      "Creating places with purpose, character and lasting value.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",

  name: "LKM Architecture",
  alternateName: "LKM Architecture Ltd",

  url: "https://www.lkmarchitecture.com",

  logo: "https://www.lkmarchitecture.com/brand/lkm-primary-transparent.png",

  description:
    "LKM Architecture is a Kenya-based architecture and design practice creating places with purpose, character and lasting value across residential, commercial, mixed-use, hospitality, healthcare and institutional projects.",

  foundingDate: "2021",

  email: "Lkmarchitecture.ke@gmail.com",

  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },

  sameAs: [
    "https://www.instagram.com/lkmarchitecture_254/",
    "https://www.facebook.com/p/lkmarchitecture_254/",
    "https://x.com/lkmarchitecture",
    "https://www.tiktok.com/@lkmarchitecture_254",
    "https://www.youtube.com/@Lkmarchitecture_254",
  ],

  serviceType: [
    "Architecture",
    "Interior Architecture",
    "Interior Design",
    "Masterplanning",
    "Residential Architecture",
    "Commercial Architecture",
    "Development Advisory",
    "Design & Build",
    "Project Management",
    "Feasibility Studies",
    "3D Architectural Visualization",
    "Planning and Building Approvals",
    "Site Supervision",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SERB3J9E6E"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SERB3J9E6E');
          `}
        </Script>
      </body>
    </html>
  );
}