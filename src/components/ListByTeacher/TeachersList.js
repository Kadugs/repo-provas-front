import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getTeacherList } from '../../services/API';
import ConnectionError from '../../errors/ConnectionError';

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
    <>
      <h1>Professores</h1>
      <ul>
        {teacherList.map((teacher) => (
          <li key={teacher.id}>
            <Link to={`${teacher.id}`}>
              <span>{teacher.name} </span>
              <span>
                {teacher.testQuantity} prova{teacher.testQuantity === 1 ? null : 's'}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
