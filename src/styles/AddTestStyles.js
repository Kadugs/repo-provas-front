import styled from 'styled-components';

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80vw;
  margin-top: 20px;
  height: 50px;
`;

export { Item, TestContainer };
