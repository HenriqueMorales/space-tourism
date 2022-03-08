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
  height: 150px;
  margin: 0 auto;
  margin-top: 80px;
  position: relative;
  width: 150px;

  &::before {
    background: #2e3038;
    border-radius: 50%;
    content: "";
    height: 150px;
    left: 0;
    position: absolute;
    transition: transform 0.3s;
    top: 0;
    width: 150px;
    z-index: -1;
  }

  &:hover {
    &:before {
      transform: scale(1.5);
    }
  }
`;

export default StyledButton;
