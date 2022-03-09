import styled from "styled-components";

const StyledNavBar = styled.nav`
  background: rgba(21, 25, 35, 0.7);
  display: none;
  font-size: 1.4rem;
  width: 60%;

  @media (min-width: 700px) {
    display: block;
  }

  @media (min-width: 1400px) {
    font-size: 1.6rem;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    height: 100%;

    li {
      align-self: center;
      cursor: pointer;
      font-family: Barlow, sans-serif;
      display: flex;
      align-items: center;
      height: 100%;

      &:hover {
        border-bottom: 4px solid hsla(0, 0%, 50%, 1);
      }

      &:active {
        border-bottom: 4px solid white;
      }

      a {
        color: ${({ theme }) => theme.colors.white};
        display: flex;
        gap: 8px;

        span {
          display: none;
          font-weight: bold;

          @media (min-width: 1400px) {
            display: block;
          }
        }
      }
    }
  }
`;

export default StyledNavBar;
