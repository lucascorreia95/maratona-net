import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Cointainer } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MaratonaNET - Catálogo de Filmes e Séries",
  description:
    "Descubra o MaratonaNet, seu catálogo completo de filmes e séries com informações detalhadas, trailers, elenco e muito mais. Encontre seus próximos favoritos e prepare-se para a maratona perfeita!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta
          name="description"
          content="Descubra o MaratonaNet, seu catálogo completo de filmes e séries com informações detalhadas, trailers, elenco e muito mais. Encontre seus próximos favoritos e prepare-se para a maratona perfeita!"
        />
        <link rel="canonical" href="https://maratona-net.vercel.app/"></link>
      </Head>
      <body className={`${montserrat.className} antialiased overflow-x-hidden`}>
        <Header />
        <main>
          <Cointainer>{children}</Cointainer>
        </main>
        <Footer />
      </body>
    </html>
  );
}
