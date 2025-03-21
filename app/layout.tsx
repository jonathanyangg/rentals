import {Nunito} from "next/font/google"
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

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
        <div> Testing 4 </div>
        
      </body>
    </html>
  );
}
