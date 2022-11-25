import Head from "next/head";
import Layout from "../components/Common/Layout";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Petit Bank | Make your life easier</title>
        <meta
          property="og:title"
          content="Petit Bank | Make your life easier"
        />
      </Head>
      <div className="container mx-auto">HomePage</div>
    </Layout>
  );
};

export default Index;
