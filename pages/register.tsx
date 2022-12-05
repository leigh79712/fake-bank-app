import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/common/Layout";
import Form from "../components/register/Form";

const register = () => {
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
      ...(await serverSideTranslations(locale, ["common", "register"])),
    },
  };
};

export default register;
