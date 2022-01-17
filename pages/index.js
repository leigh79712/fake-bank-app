import JoinToday from "components/body/JoinToday";
import Operation from "components/body/operation";
import Banner from "../components/body/Banner";
import Feature from "../components/body/Feature";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <Banner></Banner>
      <Feature></Feature>
      <Operation></Operation>
      <JoinToday></JoinToday>
    </Layout>
  );
};

export default Index;
