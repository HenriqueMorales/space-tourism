import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
  display: block;
  font-family: Bellefair, sans-serif;
  font-size: 2rem;
  height: 15rem;
  margin: 0 auto;
  position: relative;
  width: 15rem;

  @media (min-width: 700px) {
    font-size: 3.2rem;
    height: 24.2rem;
    width: 24.2rem;
  }

  @media (min-width: 1400px) {
    height: 27.4rem;
    margin: 0%;
    width: 27.4rem;
  }

  &::before {
    background: #2e3038;
    border-radius: 50%;
    content: "";
    height: 150px;
    left: 0;
    position: absolute;
    opacity: 0.8;
    transition: transform 0.3s;
    top: 0;
    width: 150px;
    z-index: -1;

    @media (min-width: 700px) {
      height: 24.2rem;
      width: 24.2rem;
    }

    @media (min-width: 1400px) {
      height: 27.4rem;
      width: 27.4rem;
    }
  }

  &:hover {
    &:before {
      transform: scale(1.2);
    }
  }
`;

export default StyledButton;
