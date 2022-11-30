import Layout from "../components/common/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Form from "../components/login/Form";

const login = () => {
  return (
    <Layout>
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
