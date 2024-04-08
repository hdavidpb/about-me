import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Footer, Navbar } from "@/components";
import { AboutMeResponse } from "@/interfaces/aboutme.response.interface";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "900"],
});

export const metadata: Metadata = {
  title: "Hernan Plaza | Desarrollador",
  description: "Desarrollador frontend senior",
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
      <body className={inter.className}>
        <Navbar name={aboutData.name} profetion={aboutData.profetion}/>
        {children}
        <Footer links={aboutData.footerLinks}/>
      </body>
    </html>
  );
}
