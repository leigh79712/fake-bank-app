import React from "react";
// import { useTranslation } from "next-i18next";
// import Link from "next/link";
import Image from "next/image";
import { useTheme } from "hooks/useTheme";

const About = () => {
  const { useThemeContext } = useTheme();
  const { type } = useThemeContext;
  // const { t } = useTranslation("common");

  return (
    <div className="container mx-auto text-center">
      {/* <nav>
        <Link className="mx-5" href="/about">
          {t("about")}
        </Link>
        <Link className="mx-5" href="/pricing">
          {t("pricing")}
        </Link>
        <Link className="mx-5" href="/terms-of-use">
          {t("terms")}
        </Link>
        <Link className="mx-5" href="/privacy-policy">
          {t("privacy")}
        </Link>
        <Link className="mx-5" href="/careers">
          {t("careers")}
        </Link>
        <Link className="mx-5" href="/blog">
          {t("blog")}
        </Link>
        <Link className="mx-5" href="/contact-us">
          {t("contact")}
        </Link>
      </nav> */}
      <Image
        className="inline my-10"
        src={`/images/logo-${type}.svg`}
        alt="Petit Bank"
        width={200}
        height={40}
      />
    </div>
  );
};

export default About;
