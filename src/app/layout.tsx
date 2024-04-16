import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Footer, Navbar } from "@/components";
import { AboutMeResponse } from "@/interfaces/aboutme.response.interface";
import Script from "next/script";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "900"],
});

export const metadata: Metadata = {
  title: "Claudia Arango | Nutricionista",
  description: "Nutricionista de Cali Colombia",
};

async function getAboutMeData ():Promise<AboutMeResponse>{
  const API_URL = process.env.BACKEND_URL
  const data = await fetch(`${API_URL}/api/about`,{next:{revalidate:60}}).then(response => response.json())

  return data as AboutMeResponse
  

}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const aboutData = await getAboutMeData()

  return (
    <html lang="es">
      {/* <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JBDFH7YNNK"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JBDFH7YNNK');`}
        </Script>
      </head> */}
          <head>
        <Script
          async
          src="https://checkout.bold.co/library/boldPaymentButton.js"
        ></Script>
      </head>
      <body className={inter.className}>
        <Navbar name={aboutData.name} profetion={aboutData.profetion} />
        {children}
        <Footer links={aboutData.footerLinks} />
      </body>
    </html>
  );
}
