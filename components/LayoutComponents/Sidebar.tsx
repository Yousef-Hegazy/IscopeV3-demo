"use client";

import { useDirection } from "@radix-ui/react-direction";
import Link from "next/link";
import { memo, useState } from "react";

import Icon from "../Icon";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

const Sidebar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const direction = useDirection();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" className="bg-primary">
          <Icon icon="bars-3" className="w-5 h-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" dir={direction}>
        <SheetHeader>
          <SheetTitle>
            <div className="flex flex-row items-center justify-between" dir="ltr">
              <Button onClick={toggleDrawer} className="bg-inherit" variant="outline" size="icon">
                <Icon className="text-neutral-500 w-5 h-5 dark:text-neutral-300" icon="chevron-right" />
              </Button>

              <Link href="/ar-SA">
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
      </SheetContent>
    </Sheet>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
