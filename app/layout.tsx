import {Nunito} from "next/font/google"
import "./globals.css";
import Navbar from "./components/navbar/navbar";

const font = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Clothing Rentals",
  description: "Clothing Rental Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="h-[2000px] margin-top-[100px]">
          <Navbar />
          {children}
        </div>
        
      </body>
    </html>
  );
}
