import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Luis Agreda - Perfil de usuario",
  description: "Description para un perfil de usuario, Luis agreda prueba tecnica",
  keywords: ["Luis Agreda", "Social Media"],
  authors: [{ name: "Luis Agreda" }],
  openGraph: {
    title: "Luis Agreda - Perfil de usuario",
    description: "Description para un perfil de usuario, Luis agreda prueba tecnica",
    images: `/images/profile_2.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header name={"Luis Agreda"} profileImage={"/images/profile_2.png"} />
        <Toaster position="top-right" />
        {children}
        </body>
    </html>
  );
}
