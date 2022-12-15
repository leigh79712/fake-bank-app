import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/common/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Form from "../components/login/Form";

const login = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <Layout className="flex justify-center items-center">
      <Form />
    </Layout>
  );
};

interface getStaticPropsTypes {
  locale: string;
}

export const getStaticProps = async ({ locale }: getStaticPropsTypes) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "login"])),
    },
  };
};

export default login;
