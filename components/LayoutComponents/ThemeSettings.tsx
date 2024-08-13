"use client";

import { useDirection } from "@radix-ui/react-direction";
import { useEffect, useState } from "react";

import useThemeSettings, { radius, RadiusType, themes } from "@/store/themeStore";
import { useTheme } from "next-themes";
import AppTooltip from "../AppTooltip";
import Icon from "../Icon";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

import { useRouter } from "next/router";

const LocaleSwitcher = () => {
  const { locale, push, pathname } = useRouter();

  console.log(locale);

  const changeLocale = (newLocale: string) => {
    push(pathname, pathname, { locale: newLocale });
  };

  return (
    <div>
      <button onClick={() => changeLocale("en-US")}>English</button>
      <button onClick={() => changeLocale("ar-SA")}>Arabic</button>
    </div>
  );
};

const ThemeSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const direction = useDirection();
  const { color: selectedColor, radius: selectedRadius, setColor, setRadius } = useThemeSettings();
  const { resolvedTheme, theme, setTheme } = useTheme();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const themeVars = themes[selectedColor];
    const rootVars = themeVars.root;
    const darkVars = themeVars.dark;
    const root = document.documentElement;

    if (resolvedTheme === "dark") {
      for (const [key, val] of Object.entries(darkVars)) {
        root.style.setProperty(`--${key}`, val);
      }
    } else {
      for (const [key, val] of Object.entries(rootVars)) {
        root.style.setProperty(`--${key}`, val);
      }
    }
    root.style.setProperty("--radius", radius[selectedRadius]);
  }, [selectedColor, selectedRadius, resolvedTheme]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <Icon icon="settings" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" dir={direction} className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            <div className="flex flex-row items-center justify-between" dir="ltr">
              <Button onClick={toggleDrawer} className="bg-inherit" variant="outline" size="icon">
                <Icon className="text-neutral-500 w-5 h-5" icon="chevron-left" />
              </Button>

              <p className="font-semibold text-lg font-sans text-center">الاعدادات</p>
            </div>
          </SheetTitle>
          <SheetDescription className="text-start" hidden>
            اعدادات الالوان
          </SheetDescription>
        </SheetHeader>

        <Separator orientation="horizontal" className="my-4" />

        <div className="mb-3 flex flex-row gap-2 bg-primary/10 dark:bg-primary/30 rounded-lg px-4 py-2">
          <Icon icon="paint" />
          <h3 className="text-semibold text-lg">اللون</h3>
        </div>

        <div className="flex flex-row flex-wrap gap-2">
          {Object.keys(themes).map((color) => (
            <AppTooltip title={color} key={color}>
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

        <div className="mb-3 rounded-lg px-4 py-2 bg-primary/10 dark:bg-primary/30 flex flex-row gap-2">
          <Icon icon="border-radius" />
          <h3 className="text-semibold text-lg">القطر</h3>
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

        <div className="mb-3 rounded-lg px-4 py-2 bg-primary/10 dark:bg-primary/30 flex flex-row gap-2">
          <Icon icon="theme-mode" />
          <h3 className="text-semibold text-lg">الوضع</h3>
        </div>

        <div className="flex flex-row flex-wrap gap-2">
          {["light", "dark", "system"].map((mode) => (
            <AppTooltip key={mode} title={mode}>
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

        <LocaleSwitcher />
      </SheetContent>
    </Sheet>
  );
};

export default ThemeSettings;
