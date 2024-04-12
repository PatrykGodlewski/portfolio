import Fotter from "@/components/composite/footer";
import Navbar from "@/components/composite/navbar";
import { LOCALES_LIST } from "@/i18n";
import { LOCALES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import "../globals.css";
import Providers from "../providers";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Patryk Godlewski - Portfolio",
  description: "Patryk Godlewski - Portfolio",
};

export const viewport: Viewport = {
  themeColor: "#000",
};

type Props = Readonly<{
  children: React.ReactNode;
  params: { locale: LOCALES };
}>;

export function generateStaticParams() {
  return LOCALES_LIST.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("common");

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background relative font-sans antialiased scroll-smooth",
          fontSans.variable
        )}
      >
        <a
          className="absolute z-[9999] left-1/2 -translate-x-1/2 top-0 transition-transform -translate-y-full focus:translate-y-0"
          href="#content"
        >
          {t("skipToMainContent")}
        </a>
        <Providers>
          <Navbar locale={locale} />
          {children}
          <Fotter />
        </Providers>
      </body>
    </html>
  );
}
