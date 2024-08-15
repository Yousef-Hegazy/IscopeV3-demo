"use client";

import { useDirection } from "@radix-ui/react-direction";
import Link from "next/link";
import { memo, useState } from "react";

import useThemeSettings from "@/store/themeStore";
import Icon from "../Icon";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import navConfig from "@/lib/navConfig";
import VerticalNavItem from "./VerticalNavItem";
import { Accordion } from "../ui/accordion";
import { useLocale } from "next-intl";

const Sidebar = memo(() => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const direction = useDirection();
  const { isSidebar } = useThemeSettings();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" className={`bg-primary flex ${isSidebar ? "" : "lg:opacity-0 lg:pointer-events-none"}`}>
          <Icon icon="bars-3" className="w-5 h-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side={direction === "rtl" ? "right" : "left"} className="max-w-sm">
        <SheetHeader>
          <SheetTitle>
            <div className="flex flex-row-reverse items-center justify-between">
              <Button onClick={toggleDrawer} className="bg-inherit" variant="outline" size="icon">
                <Icon className="text-neutral-500 dark:text-neutral-300" icon="close" />
              </Button>

              <Link href="/ar" dir="ltr">
                <Button variant="ghost" className="flex flex-row gap-3 items-center hover:bg-inherit font-sans">
                  <Icon icon="services" />

                  <p className="font-semibold text-lg font-sans">E-خــدمــات</p>
                </Button>
              </Link>
            </div>
          </SheetTitle>
          <SheetDescription className="text-start" hidden>
            تطبيق <span dir="ltr">E-خدمات</span> يقوم بأتمتة العديد من الخدمات التي تقوم بها مختلف الادارات في امانة
            المنطقة الشرقية
          </SheetDescription>
        </SheetHeader>

        <Separator className="my-3" />

        <Accordion type="multiple">
          <div className="flex flex-col gap-3">
            {navConfig.map((item, index) => (
              <VerticalNavItem item={item} key={item.title} index={index} />
            ))}
          </div>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
