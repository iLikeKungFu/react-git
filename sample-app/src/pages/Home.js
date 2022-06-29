import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
`;

const HomeTitle = styled.h1`
  color: black;
  font-size: 24px;
`;

export const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>Waffles are better than pancakes</HomeTitle>
    </HomeContainer>
  );
};
