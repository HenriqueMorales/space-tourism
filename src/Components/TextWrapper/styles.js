import styled from "styled-components";

const StyledSection = styled.section`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-family: "Barlow Condensed", sans-serif;
  text-align: center;

  @media (min-width: 700px) {
    padding-top: 5%;
  }

  .first-p {
    font-size: 1.6rem;
    letter-spacing: 2.7px;

    @media (min-width: 700px) {
      font-size: 2rem;
    }

    @media (min-width: 1400px) {
      font-size: 2.8rem;
    }
  }

  .space {
    color: ${({ theme }) => theme.colors.white};
    font-family: Bellefair, sans-serif;
    font-size: 8rem;
    padding: 16px 0%;

    @media (min-width: 700px) {
      font-size: 15rem;
    }
  }

  .last-p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin: auto;
    width: 40ch;

    @media (min-width: 700px) {
      font-size: 1.6rem;
    }

    @media (min-width: 1400px) {
      font-size: 1.8rem;
    }
  }
`;

export default StyledSection;
