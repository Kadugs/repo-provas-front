import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getTeacherList } from '../../services/API';
import ConnectionError from '../../errors/ConnectionError';
import { ListContainer, Item, Title } from '../../styles/ListStyles';

export default function TeachersList() {
  const [teacherList, setTeacherList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTeacherList()
      .then((res) => {
        setTeacherList(res.data);
      })
      .catch(() => {
        ConnectionError();
        navigate('/');
      });
  }, []);
  if (teacherList.length === 0) {
    return 'Carregando';
  }
  return (
    <ListContainer>
      <Title>
        <h1>Professores</h1>
      </Title>
      <ul>
        {teacherList.map((teacher) => (
          <Link to={`${teacher.id}`} key={teacher.id}>
            <Item>
              <span>{teacher.name} </span>
              <span>
                {teacher.testQuantity} prova{teacher.testQuantity === 1 ? null : 's'}
              </span>
            </Item>
          </Link>
        ))}
      </ul>
    </ListContainer>
  );
}
