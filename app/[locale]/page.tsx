import DashboardTabs from "@/components/DashboardComponents/DashboardTabs";
import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { locales } from "@/i18n";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div className="relative items-start w-full h-full bg-background text-foreground">
      <div className="absolute flex w-full top-0 left-0 right-0 items-start h-full">
        <div className="hidden xl:flex flex-col gap-2 h-full max-w-40 w-full shadow py-2 px-2">
          <div className="flex flex-col gap-2 items-center justify-center py-2 rounded-lg cursor-pointer hover:shadow hover:bg-primary/5 backdrop-blur-xl transition-all">
            <Icon icon="open-book" />
            <p className="text-sm text-center">{t("studies")}</p>
          </div>
          <Separator />

          <div className="flex flex-col gap-2 items-center justify-center py-2 rounded-lg cursor-pointer hover:shadow hover:bg-primary/5 backdrop-blur-xl transition-all">
            <Icon icon="suitcase" />
            <p className="text-sm text-center">{t("projects")}</p>
          </div>
          <Separator />

          <div className="flex flex-col gap-2 items-center justify-center py-2 rounded-lg cursor-pointer hover:shadow hover:bg-primary/5 backdrop-blur-xl transition-all">
            <Icon icon="suitcase" />
            <p className="text-sm text-center">{t("relatedParties")}</p>
          </div>
          <Separator />

          <div className="flex flex-col gap-2 items-center justify-center py-2 rounded-lg cursor-pointer hover:shadow hover:bg-primary/5 backdrop-blur-xl transition-all">
            <Icon icon="suitcase" />
            <p className="text-sm text-center">{t("announcementsAndCompetitions")}</p>
          </div>
          <Separator />

          <div className="flex flex-col gap-2 items-center justify-center py-2 rounded-lg cursor-pointer hover:shadow hover:bg-primary/5 backdrop-blur-xl transition-all">
            <Icon icon="suitcase" />
            <p className="text-sm text-center">{t("transactions")}</p>
          </div>
          <Separator />

          <div className="flex flex-col gap-2 items-center justify-center py-2 rounded-lg cursor-pointer hover:shadow hover:bg-primary/5 backdrop-blur-xl transition-all">
            <Icon icon="suitcase" />
            <p className="text-sm text-center">{t("reports")}</p>
          </div>
          <Separator />
        </div>

        <div className="w-full flex flex-col gap-3">
          <div className="px-2 py-3 flex flex-row items-center justify-center gap-3 shadow">
            <Button variant="outline" className="gap-2">
              <Icon icon="open-book" className="text-inherit w-5 h-5" />
              <p>{t("approveStudy")}</p>
            </Button>

            <Button variant="outline" className="gap-2">
              <Icon icon="language" className="text-inherit" />
              <p>{t("announceCompetition")}</p>
            </Button>

            <Button variant="outline" className="gap-2">
              <Icon icon="add-home" className="text-inherit" />
              <p>{t("addProject")}</p>
            </Button>

            <Button variant="outline" className="gap-2">
              <Icon icon="contractor" className="text-inherit" />
              <p>{t("addContractor")}</p>
            </Button>

            <Button variant="outline" className="gap-2">
              <Icon icon="medal" className="text-inherit w-5 h-5" />
              <p>{t("addBiTask")}</p>
            </Button>
          </div>

          <div className="overflow-y-scroll max-h-dvh px-4"></div>
        </div>

        <DashboardTabs />
      </div>
    </div>
  );
}
