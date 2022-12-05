import { useTranslation } from "next-i18next";

const Banner = () => {
  const { t } = useTranslation("home");

  return (
    <div className="font-serif tracking-widest grid grid-flow-col gap-10 justify-center content-center py-20">
      <h1 className="text-7xl w-[705px] leading-normal row-span-1 self-end">
        {t("title")}
      </h1>
      <p className="text-4xl row-span-1">{t("description")}</p>
      <div className="bg-[url(/images/card.jpeg)] w-[500px] h-[350px] bg-cover bg-center row-span-2 col-span-2"></div>
    </div>
  );
};

export default Banner;
