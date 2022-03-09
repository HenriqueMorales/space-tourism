import styled from "styled-components";

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 85%;
  justify-content: space-around;

  @media (min-width: 1400px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
  }
`;

export default StyledContainer;
