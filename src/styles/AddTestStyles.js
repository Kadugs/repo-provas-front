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
  width: 50vw;
  margin-top: 20px;
  height: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 180px;
  height: 50px;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 12px;
  border-radius: 8px;
  background-color: rgb(114, 114, 114);
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
`;
export { Item, TestContainer, Button, Form };
