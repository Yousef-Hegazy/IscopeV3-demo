"use client";

import { useDirection } from "@radix-ui/react-direction";
import { useEffect, useState } from "react";

import useThemeSettings, { radius, RadiusType, themes } from "@/store/themeStore";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AppTooltip from "../AppTooltip";
import Icon from "../Icon";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

const LocaleSwitcher = () => {
  const [locale, setLocale] = useState("ar");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Logic to determine the current locale, e.g., based on pathname
    const currentLocale = pathname.split("/")[1]; // Assuming locale is the first segment
    setLocale(currentLocale);
  }, [pathname]);

  const changeLocale = (newLocale: string) => {
    const newUrl = `/${newLocale}${pathname.substring(3)}${searchParams ? `?${searchParams.toString()}` : ""}`;
    // const newUrl = `/${newLocale}${pathname}`;
    router.push(newUrl as __next_route_internal_types__.RouteImpl<string>);
  };

  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <Button variant="outline" className={locale === "en" ? "bg-primary/20" : ""} onClick={() => changeLocale("en")}>
        English
      </Button>

      <Button variant="outline" className={locale === "ar" ? "bg-primary/20" : ""} onClick={() => changeLocale("ar")}>
        العربية
      </Button>
    </div>
  );
};

const ThemeSettings = () => {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const direction = useDirection();
  const {
    color: selectedColor,
    radius: selectedRadius,
    isSidebar,
    setColor,
    setRadius,
    setIsSidebar,
  } = useThemeSettings();
  const { resolvedTheme, theme, setTheme } = useTheme();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const root = document.querySelector("html");

    root?.setAttribute("data-color", selectedColor as string);
    root?.setAttribute("data-radius", selectedRadius.toString());
  }, [selectedColor, selectedRadius]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <Icon icon="settings" />
        </Button>
      </SheetTrigger>

      <SheetContent side={direction === "rtl" ? "left" : "right"} className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center justify-between flex-row-reverse">
              <Button onClick={toggleDrawer} className="bg-inherit" variant="outline" size="icon">
                <Icon className="text-neutral-500 dark:text-neutral-300" icon="close" />
              </Button>

              <p className="font-semibold text-lg font-sans text-center">{t("settings.title")}</p>
            </div>
          </SheetTitle>
          <SheetDescription className="text-start" hidden>
            {t("settings.title")}
          </SheetDescription>
        </SheetHeader>

        <Separator orientation="horizontal" className="my-4" />

        <div className="mb-3 transition-all duration-200 flex flex-row gap-2 bg-primary/10 dark:bg-primary/30 rounded-lg px-4 py-2">
          <Icon icon="paint" />
          <h3 className="text-semibold text-lg">{t("settings.color")}</h3>
        </div>

        <div className="flex flex-row flex-wrap gap-2">
          {Object.keys(themes).map((color) => (
            <AppTooltip title={t(`settings.colors.${color}`)} key={color}>
              <Button
                onClick={() => setColor(color)}
                variant="outline"
                className={`${selectedColor === color ? "bg-primary/20" : ""}`}
              >
                <div
                  className={`rounded-full w-3.5 h-3.5 transition-all duration-200 ${
                    selectedColor === color ? "scale-150" : "scale-100"
                  }`}
                  style={{
                    backgroundColor: `hsl(${
                      resolvedTheme === "dark" ? themes[color].dark.primary : themes[color].root.primary
                    })`,
                  }}
                />
              </Button>
            </AppTooltip>
          ))}
        </div>

        <Separator orientation="horizontal" className="my-4" />

        <div className="mb-3 transition-all duration-200 rounded-lg px-4 py-2 bg-primary/10 dark:bg-primary/30 flex flex-row gap-2">
          <Icon icon="border-radius" />
          <h3 className="text-semibold text-lg">{t("settings.radius")}</h3>
        </div>

        <div className="flex flex-row flex-wrap gap-2">
          {Object.keys(radius)
            .sort((a, b) => (a > b ? 1 : -1))
            .map((rad) => (
              <AppTooltip key={rad} title={rad}>
                <Button
                  onClick={() => setRadius(rad as unknown as RadiusType)}
                  variant="outline"
                  className={`${selectedRadius === (rad as unknown as RadiusType) ? "bg-primary/20" : ""}`}
                >
                  <div
                    className="rounded-full w-6 h-3 bg-primary"
                    style={{
                      borderRadius: radius[rad as unknown as RadiusType],
                    }}
                  />
                </Button>
              </AppTooltip>
            ))}
        </div>

        <Separator orientation="horizontal" className="my-4" />

        <div className="mb-3 transition-all duration-200 rounded-lg px-4 py-2 bg-primary/10 dark:bg-primary/30 flex flex-row gap-2">
          <Icon icon="theme-mode" />
          <h3 className="text-semibold text-lg">{t("settings.themeMode")}</h3>
        </div>

        <div className="flex flex-row flex-wrap gap-2">
          {["light", "dark", "system"].map((mode) => (
            <AppTooltip key={mode} title={t(`settings.modes.${mode}`)}>
              <Button
                onClick={() => setTheme(mode)}
                variant="outline"
                className={`${theme === mode ? "bg-primary/20" : ""}`}
              >
                <Icon icon={`${mode}-theme`} />
              </Button>
            </AppTooltip>
          ))}
        </div>

        <Separator orientation="horizontal" className="my-4" />

        <div className="mb-3 transition-all duration-200 rounded-lg px-4 py-2 bg-primary/10 dark:bg-primary/30 flex flex-row gap-2">
          <Icon icon="language" />
          <h3 className="text-semibold text-lg">{t("settings.language")}</h3>
        </div>

        <LocaleSwitcher />

        <Separator orientation="horizontal" className="my-4" />

        <div className="mb-3 transition-all duration-200 rounded-lg px-4 py-2 bg-primary/10 dark:bg-primary/30 flex flex-row gap-2">
          <Icon icon="layout-design" />
          <h3 className="text-semibold text-lg">{t("settings.layout")}</h3>
        </div>

        <div className="flex flex-row gap-3 items-center justify-center">
          <Button
            variant="outline"
            className={`h-14 ${isSidebar ? "bg-primary/10" : ""}`}
            onClick={() => setIsSidebar(true)}
          >
            <div className="flex flex-row justify-center items-start gap-1 m-4">
              <div className="h-10 w-2.5 rounded bg-primary" />

              <div className="flex flex-col gap-1.5">
                <div className="w-8 h-2.5 bg-primary/70 rounded" />

                <div className="h-6 w-8 rounded bg-primary/30 border border-dashed border-primary/60" />
              </div>
            </div>
          </Button>

          <Button
            variant="outline"
            className={`h-14 ${!isSidebar ? "bg-primary/10" : ""}`}
            onClick={() => setIsSidebar(false)}
          >
            <div className="flex flex-row justify-center items-start gap-1 m-4">
              <div className="flex flex-col gap-1.5">
                <div className="w-10 h-2.5 bg-primary rounded" />

                <div className="h-6 w-10 rounded bg-primary/30 border border-dashed border-primary/60" />
              </div>
            </div>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ThemeSettings;
