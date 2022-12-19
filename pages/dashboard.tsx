import { useSession } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/common/Layout";

const dashboard = () => {
  const { data: session } = useSession();

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
