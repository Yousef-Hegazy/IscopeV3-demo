"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { memo } from "react";

import Icon from "../Icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTranslations } from "next-intl";

const NavbarAvatar = memo(() => {
  const t = useTranslations();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcuNAqLg8BruwxgIxs2nkFWLWOcD-CxGa-6Q&s" />
          <AvatarFallback>{t("admin")}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="blurred-bg">
        <DropdownMenuLabel className="text-center text-base">{t("account.title")}</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-2 cursor-pointer px-4">
            <Icon icon="profile" />
            <span>{t("account.profile")}</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="gap-2 cursor-pointer px-4">
            <Icon icon="edit-account" />
            <span>{t("account.settings")}</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="gap-2 cursor-pointer px-4">
            <Icon icon="logout" />
            <span>{t("account.logout")}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

NavbarAvatar.displayName = "NavbarAvatar";

export default NavbarAvatar;
