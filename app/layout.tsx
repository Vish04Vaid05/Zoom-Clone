import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import '@stream-io/video-react-sdk/dist/css/styles.css';
import "react-datepicker/dist/react-datepicker.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoom 2.0",
  description: "App created by Vishwas Kanchan Vaidya",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo.svg" />

        {/* Open Graph Metadata for LinkedIn and Social Media */}
        <meta property="og:title" content="Zoom 2.0" />
        <meta property="og:description" content="App created by Vishwas Kanchan Vaidya" />
        <meta property="og:image" content="/icons/logo.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zoom-clone-b3hjx4sgi-vishwas-vaidyas-projects.vercel.app/" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/icons/logo.svg",
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1c1f2e",
            colorInputBackground: "#252a41",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
