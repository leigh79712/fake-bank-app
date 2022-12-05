import { useTranslation } from "next-i18next";
import Link from "next/link";

const JoinToday = () => {
  const { t } = useTranslation("home");

  return (
    <section className="text-center my-20">
      <h2 className="text-5xl mb-16">{t("joinToDay")}</h2>
      <Link
        href="/register"
        className="text-white bg-cyan-500 rounded-full py-2 px-5"
      >
        {t("joinToDayBtn")}
      </Link>
    </section>
  );
};

export default JoinToday;
