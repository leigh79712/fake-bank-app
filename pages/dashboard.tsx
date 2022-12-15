import { useEffect } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/common/Layout";

const dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <Layout>
      <div className="container mx-auto">Dashboard</div>
    </Layout>
  );
};

interface getStaticPropsTypes {
  locale: string;
}

export const getStaticProps = async ({ locale }: getStaticPropsTypes) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default dashboard;
