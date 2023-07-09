import Home from "@/screens/Home/Home";
import styled from "styled-components";

const PageWrapper = styled.main`
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const HomePage = () => {
  return (
    <PageWrapper>
      <Home />
    </PageWrapper>
  );
};

export default HomePage;
