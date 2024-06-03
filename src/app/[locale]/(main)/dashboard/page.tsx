import { useTranslations } from "next-intl";

export default function Dashboard() {
  const t = useTranslations("Index");

  return <div className="h-[300vh]">{t("title")}</div>;
}
