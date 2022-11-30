import Layout from "../components/Common/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Banner from "../components/HomeBody/Banner";
import Feature from "../components/HomeBody/Feature";
import Operation from "../components/HomeBody/Operation";
import JoinToday from "../components/HomeBody/JoinToday";

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <Banner />
        <Feature />
        <Operation />
        <JoinToday />
      </div>
    </Layout>
  );
};

interface getStaticPropsTypes {
  locale: string;
}

export const getStaticProps = async ({ locale }: getStaticPropsTypes) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "homePage"])),
    },
  };
};

export default Index;
