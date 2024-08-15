"use client";

import { NavObject } from "@/lib/navConfig";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";
import { UrlObject } from "url";
import Icon from "../Icon";
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../ui/menubar";

interface Props {
  t: any;
  item: NavObject;
  getRoute: (route?: string) => UrlObject;
  locale: string;
}

const HorizontalSubMenu = ({ item, t, getRoute, locale }: Props) => {
  const pathname = usePathname();
  const selected = useMemo(() => {
    return pathname.includes(getRoute(item.route) as unknown as string);
  }, [getRoute, item.route, pathname]);

  return item.children ? (
    <MenubarSub>
      <MenubarSubTrigger className={`${selected ? "primary-bg" : ""} cursor-pointer`}>
        <div className="flex flex-row justify-between items-center gap-2 w-full">
          <p>{t(item.title)}</p>
          <Icon icon={locale === "ar" ? "menu-arrow-left" : "menu-arrow-right"} className="w-4 h-4" />
        </div>
      </MenubarSubTrigger>

      <MenubarSubContent>
        {item.children.map((i) =>
          i.children ? (
            <HorizontalSubMenu locale={locale} key={i.route} item={item} t={t} getRoute={getRoute} />
          ) : (
            <Link key={i.route} href={getRoute(i.route)}>
              <MenubarItem className={`${selected ? "primary-bg" : ""} cursor-pointer`}>{t(i.title)}</MenubarItem>
            </Link>
          )
        )}
      </MenubarSubContent>
    </MenubarSub>
  ) : (
    <Link href={getRoute(item.route)} replace>
      <MenubarItem className={`${selected ? "primary-bg" : ""}`}>{t(item.title)}</MenubarItem>
    </Link>
  );
};

const HorizontalNavItem = ({ item }: { item: NavObject }) => {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const getRoute = useCallback(
    (route?: string) => {
      return route ? (("/" + locale + "/" + route) as unknown as UrlObject) : (("/" + locale) as unknown as UrlObject);
    },
    [locale]
  );

  const selected = useMemo(() => {
    return pathname.includes(getRoute(item.route) as unknown as string);
  }, [getRoute, item.route, pathname]);

  return item.children ? (
    <MenubarMenu key={item.route}>
      <MenubarTrigger className={`${selected ? "primary-bg" : ""} cursor-pointer`}>{t(item.title)}</MenubarTrigger>
      <MenubarContent>
        {item.children.map((i) =>
          i.children ? (
            <HorizontalSubMenu locale={locale} key={i.route} item={i} t={t} getRoute={getRoute} />
          ) : (
            <Link href={getRoute(i.route)} replace key={item.route}>
              <MenubarItem className={`${selected ? "primary-bg" : ""} cursor-pointer`}>{t(i.title)}</MenubarItem>
            </Link>
          )
        )}
      </MenubarContent>
    </MenubarMenu>
  ) : (
    <Link href={getRoute(item.route)} replace>
      <MenubarItem className={`${selected ? "primary-bg" : ""} cursor-pointer`}>
        <p>{t(item.title)}</p>
      </MenubarItem>
    </Link>
  );
};

export default HorizontalNavItem;
