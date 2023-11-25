import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/common/Layout";
import UserForm from "../components/dashboard/UserForm";

const dashboard = () => {
  return (
    <Layout className="flex justify-center items-center">
      <UserForm />
    </Layout>
  );
};

interface getStaticPropsTypes {
  locale: string;
}

export const getStaticProps = async ({ locale }: getStaticPropsTypes) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "dashboard"])),
    },
  };
};

export default dashboard;
