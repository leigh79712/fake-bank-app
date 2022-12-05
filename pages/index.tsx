import Layout from "../components/common/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Banner from "../components/home/Banner";
import Feature from "../components/home/Feature";
import Operation from "../components/home/Operation";
import JoinToday from "../components/home/JoinToday";
import About from "../components/home/About";

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <Banner />
        <Feature />
        <Operation />
        <JoinToday />
        <About />
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
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
};

export default Index;
