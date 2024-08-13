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

const ModeDropdown = memo(() => {
  const { theme, setTheme } = useTheme();

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

      <DropdownMenuContent>
        <DropdownMenuLabel className="text-center text-lg">الوضع</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setTheme("light")} className="gap-2 cursor-pointer px-4 font-semibold">
            <Icon icon="light-theme" />
            <span>الصباحي</span>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setTheme("dark")} className="gap-2 cursor-pointer px-4 font-semibold">
            <Icon icon="dark-theme" />
            <span>الليلي</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => setTheme("system")} className="gap-2 cursor-pointer px-4 font-semibold">
            <Icon icon="system-theme" />
            <span>النظام</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

ModeDropdown.displayName = "ModeDropdown";

export default ModeDropdown;
