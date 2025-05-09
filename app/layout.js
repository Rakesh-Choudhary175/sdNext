import { Geist, Geist_Mono } from "next/font/google";
import { ImgDataProvider } from "./_context/imgData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Specterior Design",
  description: "Specterior Designp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header /> */}
        <ImgDataProvider>
          <main>{children}</main>
        </ImgDataProvider>
      </body>
    </html>
  );
}
