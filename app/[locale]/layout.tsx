import LayoutComponents from "@/components/LayoutComponents";
import SVGs from "@/components/SVGs";
import { cn } from "@/lib/utils";
import Providers, { ThemeProvider } from "@/providers/Providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";

import { localeDir, locales } from "@/i18n";
import "./globals.css";

const inter = localFont({
  src: "../../assets/fonts/Bahij_TheSansArabic-Plain.ttf",
  variable: "--font-sans",
});

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("title"),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const RootLayout = async ({ children, params: { locale } }: Readonly<RootLayoutProps>) => {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <Providers>
      <html lang={locale} dir={localeDir[locale]} suppressHydrationWarning>
        <head />
        <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider>
              <SVGs />
              <LayoutComponents />
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
