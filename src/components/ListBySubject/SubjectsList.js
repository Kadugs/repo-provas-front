import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getSubjectsList } from '../../services/API';
import ConnectionError from '../../errors/ConnectionError';
import { ListContainer, Item, Title } from '../../styles/ListStyles';

export default function SubjectsList() {
  const [subjectList, setSubjectList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSubjectsList()
      .then((res) => {
        setSubjectList(res.data);
      })
      .catch(() => {
        ConnectionError();
        navigate('/');
      });
  }, []);

  if (subjectList.length === 0) {
    return 'Carregando';
  }

  return (
    <ListContainer>
      <Title>
        <h1>Disciplinas</h1>
      </Title>
      <ul>
        {subjectList.map((period) => (
          <li key={period.id}>
            <div>
              <span>{period.period} período </span>
            </div>
            <ul>
              {period.subjects.map((subject) => (
                <Item key={subject.id}>
                  <Link to={`${subject.id}`}>- {subject.subject}</Link>
                </Item>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </ListContainer>
  );
}
