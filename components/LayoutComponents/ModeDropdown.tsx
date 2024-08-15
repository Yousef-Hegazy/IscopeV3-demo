"use client";

import { useTheme } from "next-themes";

import Icon from "../Icon";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { memo, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const ModeDropdown = memo(() => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <Icon icon={`${theme}-theme`} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="blurred-bg">
        <DropdownMenuLabel className="text-center text-lg">{t("settings.themeMode")}</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setTheme("light")} className="gap-2 cursor-pointer px-4 font-semibold">
            <Icon icon="light-theme" />
            <span>{t("settings.modes.light")}</span>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setTheme("dark")} className="gap-2 cursor-pointer px-4 font-semibold">
            <Icon icon="dark-theme" />
            <span>{t("settings.modes.dark")}</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => setTheme("system")} className="gap-2 cursor-pointer px-4 font-semibold">
            <Icon icon="system-theme" />
            <span>{t("settings.modes.system")}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

ModeDropdown.displayName = "ModeDropdown";

export default ModeDropdown;
