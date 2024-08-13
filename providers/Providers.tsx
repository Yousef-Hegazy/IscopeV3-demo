"use client";

import { DirectionProvider } from "@radix-ui/react-direction";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import React from "react";

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <DirectionProvider dir="rtl">{children}</DirectionProvider>;
};

export default Providers;
