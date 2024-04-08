import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const inter = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "900"],
});

export const metadata: Metadata = {
  title: "Hernan Plaza | Desarrollador",
  description: "Desarrollador frontend senior",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
