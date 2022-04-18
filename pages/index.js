import JoinToday from "components/body/JoinToday";
import Operation from "components/body/operation";
import Banner from "../components/body/Banner";
import Feature from "../components/body/Feature";

const Index = ({ loggedIn, data }) => {
  console.log(loggedIn);
  return (
    <main>
      <Banner loggedIn={loggedIn} data={data}></Banner>
      <Feature></Feature>
      <Operation></Operation>
      <JoinToday loggedIn={loggedIn} data={data}></JoinToday>
    </main>
  );
};

export default Index;
