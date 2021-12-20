import styled from 'styled-components';

const ListContainer = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  margin-bottom: 20px;
  h1 {
    font-size: 22px;
  }
`;
const Item = styled.li`
  margin-top: 10px;
  width: 20vw;
  height: 20px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

export { ListContainer, Item, Title };
