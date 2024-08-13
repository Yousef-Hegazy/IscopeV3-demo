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

const NavbarAvatar = memo(() => (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Avatar>
        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcuNAqLg8BruwxgIxs2nkFWLWOcD-CxGa-6Q&s" />
        <AvatarFallback>مدير النظام</AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel className="text-center text-lg">الحساب</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem className="gap-2 cursor-pointer px-4 font-semibold">
          <Icon icon="profile" />
          <span>الملف الشخصي</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-2 cursor-pointer px-4 font-semibold">
          <Icon className="w-7 h-7" icon="edit-account" />
          <span>اعدادات الحساب</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="gap-2 cursor-pointer px-4 font-semibold">
          <Icon icon="logout" />
          <span>تسجيل الخروج</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
));

NavbarAvatar.displayName = "NavbarAvatar";

export default NavbarAvatar;
