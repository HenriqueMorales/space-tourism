import styled from "styled-components";

const StyledSection = styled.section`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-family: "Barlow Condensed", sans-serif;
  margin-top: 48px;
  text-align: center;

  .first-p {
    font-size: 1.6rem;
    letter-spacing: 2.7px;
  }

  .space {
    color: ${({ theme }) => theme.colors.white};
    font-family: Bellefair, sans-serif;
    font-size: 8rem;
    padding: 16px 0%;
  }

  .last-p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin: auto;
    width: 40ch;
  }
`;

export default StyledSection;
