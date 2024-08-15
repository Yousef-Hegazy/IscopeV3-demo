"use client";

import { NavObject } from "@/lib/navConfig";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { UrlObject } from "url";
import Icon from "../Icon";
import { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const VerticalNavItem = ({ item, isChild, index }: { item: NavObject; isChild?: boolean; index: number }) => {
  const locale = useLocale();
  const t = useTranslations();
  const pathname = usePathname();
  const route = useMemo(() => (item.route ? `/${locale}/${item.route}` : "/" + locale), [item.route, locale]);
  const selected = useMemo(() => {
    return pathname.includes(route);
  }, [pathname, route]);

  return item.children ? (
    <AccordionItem
      value={item.title}
      // className={`${isChild ? "border-0" : ""}`}
      className="border-0"
    >
      <AccordionTrigger
        className={`hover:no-underline py-2 px-3 hover:bg-primary/20 transition-all ${
          selected ? "bg-primary/20 text-primary font-bold" : "text-foreground font-normal"
        } rounded-lg`}
      >
        <div className={`flex flex-row gap-2 items-center justify-start`}>
          {item.icon && <Icon className="w-5 h-5" icon={item.icon} />}
          <p>{t(item.title)}</p>
        </div>
      </AccordionTrigger>

      <AccordionContent className={`mt-2 ${isChild ? "pb-0" : ""}`}>
        <div className={`flex flex-col gap-3 ms-1.5 px-3`}>
          {item.children.map((i, index) => (
            <VerticalNavItem key={i.title} item={i} index={index} isChild />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  ) : (
    <Link href={route as unknown as UrlObject} locale={locale}>
      <div
        className={`flex flex-row gap-2 items-center justify-start hover:bg-primary/20 px-3 py-2 rounded-lg transition-all ${
          selected ? "bg-primary/20 text-primary font-bold" : "text-foreground font-normal"
        }`}
      >
        {item.icon && <Icon className="w-5 h-5" icon={item.icon} />}

        <div
          className={`w-1.5 h-1.5 ${
            selected ? "scale-125 bg-primary" : "scale-100 bg-neutral-400 dark:bg-neutral-300"
          } rounded-full`}
        />

        <p>{t(item.title)}</p>
      </div>
    </Link>
  );
};

export default VerticalNavItem;
