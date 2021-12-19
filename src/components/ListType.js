import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ListType() {
  return (
    <Options>
      <div>
        <Link to="by/teachers">Listar por professores</Link>
      </div>
      <div>
        <Link to="by/subjects">Listar por disciplinas</Link>
      </div>
    </Options>
  );
}

const Options = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;
`;
