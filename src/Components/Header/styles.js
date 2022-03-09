import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 700px) {
    align-items: inherit;
  }

  .logo {
    padding: 2.4rem;
  }

  .menu {
    cursor: pointer;
    padding: 2.4rem;

    @media (min-width: 700px) {
      display: none;
    }
  }
`;

export default StyledHeader;
