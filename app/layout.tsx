import {Nunito} from "next/font/google"
import "./globals.css";

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
