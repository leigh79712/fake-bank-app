import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const JoinToday = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { t } = useTranslation("home");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  return (
    <section className="text-center my-28">
      <h2 className="text-5xl mb-16">{t("joinToDay")}</h2>
      {isLogin ? null : (
        <Link
          href="/register"
          className="text-white bg-cyan-500 rounded-full py-2 px-5"
        >
          {t("joinToDayBtn")}
        </Link>
      )}
    </section>
  );
};

export default JoinToday;
