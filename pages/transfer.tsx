import Layout from "../components/common/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const transfer = () => {
  return (
    <Layout>
      <p>transfer</p>
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

export default transfer;
