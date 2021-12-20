import styled from 'styled-components';

const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PagesContainer = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
`;
const Logo = styled.h1`
  font-family: 'Black Ops One', cursive;
  font-size: 50px;
  padding-bottom: 50px;
`;

export { ContainerHome, PagesContainer, Logo };
