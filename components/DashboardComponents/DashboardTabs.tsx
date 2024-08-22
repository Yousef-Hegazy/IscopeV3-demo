import momentH from "moment-hijri";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import Icon from "../Icon";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const yYDay = momentH().add(-2, "day");
const yDay = momentH().add(-1, "day");

const formatDate = (date: momentH.Moment, locale?: string) => {
  const arabicDays: { [key: string]: string } = {
    Saturday: "السبت",
    Sunday: "الأحد",
    Monday: "الاثنين",
    Tuesday: "الثلاثاء",
    Wednesday: "الاربعاء",
    Thursday: "الخميس",
    Friday: "الجمعة",
  };
  const day = locale === "ar" ? arabicDays[date.format("dddd")] : date.format("dddd");
  const formatted = date.format("iYYYY-iMM-iDD | YYYY-MM-DD hh:mm a");
  return `${day} ${formatted}`;
};

const tabs = [
  {
    value: "tasks",
    icon: "tasks",
  },
  {
    value: "notifications",
    icon: "bell-alert",
  },
  {
    value: "messages",
    icon: "letter",
  },
];

const tasksList = (locale: string) => [
  {
    title: "workOrderReport",
    date: formatDate(yDay, locale),
    projectName: "saudiArabiaProject",
  },
  {
    title: "workOrderReport",
    date: formatDate(yDay, locale),
    projectName: "saudiArabiaProject",
  },
  {
    title: "workOrderReport",
    date: formatDate(yYDay, locale),
    projectName: "saudiArabiaProject",
  },
  {
    title: "workOrderReport",
    date: formatDate(yYDay, locale),
    projectName: "saudiArabiaProject",
  },
];

const DashboardTabs = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="max-w-sm w-full h-full shadow p-4 hidden xl:flex">
      <Tabs className="w-full" defaultValue={tabs[0].value}>
        <TabsList className="w-full h-fit gap-2 justify-evenly bg-primary/5">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="flex-1">
              <div className="flex flex-col gap-1 items-center justify-center">
                <Icon icon={tab.icon} />

                <p>{t(tab.value)}</p>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={tabs[0].value}>
          <div className="flex flex-col gap-1.5 max-w-full">
            {tasksList(locale).map((task, index) => (
              <React.Fragment key={`${task.title}-${index}`}>
                <div className="flex flex-row items-center rounded-lg justify-start gap-4 p-2 cursor-pointer hover:bg-primary/5 hover:shadow hover:backdrop-blur-md transition-all duration-150">
                  <Icon icon="tasks" className="text-primary brightness-75 dark:brightness-125" />

                  <div className="flex-1 flex flex-col gap-1 items-start">
                    <h3 className="font-semibold text-neutral-700 dark:text-neutral-300">{t(task.title)}</h3>
                    <p className="text-sm text-primary brightness-75 dark:brightness-125">{task.date}</p>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">{t(task.projectName)}</p>
                  </div>
                </div>
                <Separator />
              </React.Fragment>
            ))}
          </div>
        </TabsContent>

        <TabsContent value={tabs[1].value}>{tabs[1].value}</TabsContent>

        <TabsContent value={tabs[2].value}>{tabs[2].value}</TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardTabs;
