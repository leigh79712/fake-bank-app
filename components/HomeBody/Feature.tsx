import React from "react";
import { useTranslation } from "next-i18next";

const Feature = () => {
  const { t } = useTranslation("homePage");

  return (
    <section>
      <h2 className="text-4xl text-center tracking-widest text-teal-400 font-serif">
        {t("feature")}
      </h2>
      <p className="text-center my-5 tracking-widest">{t("featureDes")}</p>
      <div className="flex gap-x-10 items-center justify-center">
        <div className="bg-[url(/images/bank.jpeg)] w-[800px] h-[400px] bg-cover bg-center" />
        <div className="flex-1">
          <h3 className="text-2xl text-blue-900">{t("featureSection1")}</h3>
          <p className="row-span-1 mt-3 leading-snug">{t("featureDes1")}</p>
        </div>
      </div>
      <div className="flex gap-x-10 items-center justify-center">
        <div className="flex-1">
          <h3 className="text-2xl text-blue-900">{t("featureSection2")}</h3>
          <p className="row-span-1 mt-3 leading-snug">{t("featureDes2")}</p>
        </div>
        <div className="bg-[url(/images/saving.jpeg)] w-[800px] h-[400px] bg-cover bg-center" />
      </div>
      <div className="flex gap-x-10 items-center justify-center">
        <div className="bg-[url(/images/piggybank.jpeg)] w-[800px] h-[400px] bg-cover bg-center" />
        <div className="flex-1">
          <h3 className="text-2xl text-blue-900">{t("featureSection3")}</h3>
          <p className="row-span-1 mt-3 leading-snug">{t("featureDes3")}</p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
