import { Banner, Feature, Operation, JoinToday } from "components/HomeBody";

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
