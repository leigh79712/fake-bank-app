import React from "react";
import { useTranslation } from "next-i18next";

const Operation = () => {
  const { t } = useTranslation("home");

  return (
    <section>
      <h2 className="text-4xl text-center tracking-widest text-teal-400 font-serif">
        {t("operation")}
      </h2>
      <p className="text-center my-5 tracking-widest">{t("operationDes")}</p>
      <div className="grid grid-cols-3 gap-x-5">
        <div className="text-center">
          <div className="inline-block bg-[url(/images/icon1.png)] bg-[length:350px_200px] bg-no-repeat bg-center w-[350px] h-[200px]" />
          <h3 className="text-2xl text-blue-900">{t("operationSection1")}</h3>
          <p className="text-left row-span-1 mt-3 leading-snug">
            {t("operationDes1")}
          </p>
        </div>
        <div className="text-center">
          <div className="inline-block bg-[url(/images/icon2.png)] bg-[length:350px_200px] bg-no-repeat bg-center w-[350px] h-[200px]" />
          <h3 className="text-2xl text-blue-900">{t("operationSection2")}</h3>
          <p className="text-left row-span-1 mt-3 leading-snug">
            {t("operationDes2")}
          </p>
        </div>
        <div className="text-center">
          <div className="inline-block bg-[url(/images/icon3.png)] bg-[length:350px_200px] bg-no-repeat bg-center w-[350px] h-[200px]" />
          <h3 className="text-2xl text-blue-900">{t("operationSection3")}</h3>
          <p className="text-left row-span-1 mt-3 leading-snug">
            {t("operationDes3")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Operation;
