"use client";

import navConfig from "@/lib/navConfig";
import useThemeSettings from "@/store/themeStore";
import { Menubar } from "../ui/menubar";
import HorizontalNavItem from "./HorizontalNavItem";

const HorizontalNavbar = () => {
  const { isSidebar } = useThemeSettings();

  return (
    <div className={`hidden ${!isSidebar ? "lg:flex" : ""} w-full px-4 py-3 overflow-x-auto`}>
      <Menubar className="bg-slate-200/40 backdrop-blur-md">
        {navConfig.map((item) => (
          <HorizontalNavItem key={item.route} item={item} />
        ))}
      </Menubar>
    </div>
  );
};

export default HorizontalNavbar;
