import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background: #ef0909;
  height: 50px;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

export const TitleContainer = styled.a`
  margin: auto;
`;

export const IconContainer = styled.div`
  padding: 10px;
  cursor: pointer;

  & svg {
    height: 30px;
  }
`;
