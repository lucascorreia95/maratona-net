import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Cointainer } from "@/components/Container";
import { Header } from "@/components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MaratonaNET",
  description: "Catálogo de Filmes e Séries com Informações Detalhadas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        <main>
          <Cointainer>{children}</Cointainer>
        </main>
      </body>
    </html>
  );
}
