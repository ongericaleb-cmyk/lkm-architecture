import type { Metadata } from "next";
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
  metadataBase: new URL(
    "https://www.lkmarchitecture.com"
  ),
  openGraph: {
    title:
      "LKM Architecture | Architecture, Development & Design",
    description:
      "Creating places with purpose, character and lasting value.",
    url: "https://www.lkmarchitecture.com",
    siteName: "LKM Architecture",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "LKM Architecture | Architecture, Development & Design",
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
  description:
    "Architecture, development and design practice based in Kenya.",
  url: "https://www.lkmarchitecture.com",
  areaServed: "Kenya",
  serviceType: [
    "Architecture",
    "Interior Architecture",
    "Masterplanning",
    "Development Advisory",
    "Design & Build",
    "Project Management",
    "Feasibility & Strategy",
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

      </body>

    </html>
  );
}