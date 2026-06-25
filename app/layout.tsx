import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "VIDA · Una Semana en España",
  description:
    "7 audio lekcija španskog za početnike. 7 pravih situacija. Za jednu opuštenu prvu nedelju u Španiji.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
