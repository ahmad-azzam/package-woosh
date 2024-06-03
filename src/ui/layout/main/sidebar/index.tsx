import { GenButton } from "@/ui/general";
import { useTranslations } from "next-intl";
import React from "react";

const Sidebar: React.FC = () => {
  const t = useTranslations("Sidebar");

  return (
    <div className="min-h-screen md:flex md:flex-col w-72 fixed hidden border-r shadow-md">
      <div className="h-16 border-b flex items-center px-4">sidebar</div>
      <div className="p-4 pb-6">
        <GenButton className="">
          <span className="">{t("button.delivery")}</span>
        </GenButton>
      </div>
      <div className="p-4 overflow-auto h-[77vh]">
        <div className="h-20">menu</div>
        <div className="h-20">menu</div>
        <div className="h-20">menu</div>
        <div className="h-20">menu</div>
        <div className="h-20">menu</div>
        <div className="h-20">menu</div>
      </div>
    </div>
  );
};

export default Sidebar;
