import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "./NavBar";
import { Suspense } from "react";
import AuthProvider from "./auth/Provider";


const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({subsets:["latin"],weight:['400','500']});

//custom font twin nee 
// <-see public htae ka fonts
// const poppins = localFont({
//   src:'../public/fonts/ custom font name.ati akya font name eg poppins-regular-webfont.woff2 '
  // variable : '--font-poppins' <- that is change className 
// })


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  openGraph:{
    title:"...",
    description:"..."
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en" data-theme="winter">
      {/* this class name */}
      <body className={roboto.className}>
        <AuthProvider>
          <NavBar />
          <main className="p-5">
            {children}
            
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
