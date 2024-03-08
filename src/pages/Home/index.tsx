import Header from "../../components/Header";
// import NoContent from "../../components/NoContent";
import * as C from "./styles";
import LoadingSpinner from "../../components/LoadingSpinner";

function Home() {
  return (
    <>
      <C.FullScreenContainer>
        <Header />
        <LoadingSpinner />
        {/* <NoContent /> */}
      </C.FullScreenContainer>
    </>
  );
}

export default Home;
