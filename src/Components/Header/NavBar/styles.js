import styled from "styled-components";

const StyledNavBar = styled.nav`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(80px);
  font-size: 1.4rem;
  position: absolute;
  right: ${({ showMenu }) => (showMenu ? 0 : "-100%")};
  top: 0;
  bottom: 0;
  transition: 0.3s;
  width: 60%;
  z-index: 100;

  @media (min-width: 700px) {
    transform: none;
    position: static;
    z-index: auto;
  }

  @media (min-width: 1400px) {
    font-size: 1.6rem;
  }

  img {
    cursor: pointer;
    display: block;
    margin-left: auto;
    padding: 4rem 2.5rem;

    @media (min-width: 700px) {
      display: none;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 1.6rem;

    @media (min-width: 700px) {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: stretch;
      height: 100%;
      margin: 0%;
    }

    li {
      cursor: pointer;
      font-family: Barlow, sans-serif;
      padding: 32px;
      padding-right: 0;

      @media (min-width: 700px) {
        align-self: center;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0;

        &:hover {
          border-bottom: 4px solid hsla(0, 0%, 50%, 1);
        }
        &:active {
          border-bottom: 4px solid white;
        }
      }

      a {
        color: ${({ theme }) => theme.colors.white};
        display: flex;
        gap: 1.6rem;
        padding: 4px 0;
        height: 100%;
        align-items: center;

        &:hover {
          border-right: 4px solid hsla(0, 0%, 50%, 1);

          @media (min-width: 700px) {
            border: none;
          }
        }

        &:active {
          border-right: 4px solid white;

          @media (min-width: 700px) {
            border: none;
          }
        }

        span {
          font-weight: bold;

          @media (min-width: 700px) and (max-width: 1400px) {
            display: none;
          }
        }
      }
    }
  }
`;

export default StyledNavBar;
