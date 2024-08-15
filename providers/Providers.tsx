"use client";

import { localeDir } from "@/i18n";
import { DirectionProvider } from "@radix-ui/react-direction";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";
import { useLocale } from "next-intl";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  const locale = useLocale();

  return <DirectionProvider dir={localeDir[locale]}>{children}</DirectionProvider>;
};

export default Providers;
