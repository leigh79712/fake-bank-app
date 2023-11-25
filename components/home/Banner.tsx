import { useTranslation } from "next-i18next";
import { useTheme } from "hooks/useTheme";

const Banner = () => {
  const { t } = useTranslation("home");
  const { useThemeContext } = useTheme();
  const { type } = useThemeContext;

  return (
    <div className="font-serif tracking-widest grid grid-flow-col gap-10 justify-center content-center py-28">
      <h1 className="text-7xl w-[705px] leading-normal row-span-1 self-end">
        {t("title")}
      </h1>
      <p className="text-4xl row-span-1">{t("description")}</p>
      <div
        style={{ backgroundImage: `url(/images/card-${type}.jpeg)` }}
        className={`w-[500px] h-[350px] bg-cover bg-center row-span-2 col-span-2`}
      />
    </div>
  );
};

export default Banner;
