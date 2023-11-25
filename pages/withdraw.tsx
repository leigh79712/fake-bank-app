import Layout from "../components/common/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const withdraw = () => {
  return (
    <Layout>
      <p>withdraw</p>
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

export default withdraw;
