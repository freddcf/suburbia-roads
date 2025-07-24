import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";

const anton = Anton({
  variable: "--font-anton",
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title,
    description: settings.data.meta_description,
    openGraph: {
      images: settings.data.fallback_og_image.url ?? undefined,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${anton.variable} ${montserrat.variable} 
        antialiased font-mont font-medium text-zinc-800`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
