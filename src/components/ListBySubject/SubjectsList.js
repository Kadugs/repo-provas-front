import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getSubjectsList } from '../../services/API';
import ConnectionError from '../../errors/ConnectionError';

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
    <>
      <h1>Disciplinas</h1>
      <ul>
        {subjectList.map((period) => (
          <li key={period.id}>
            <div>
              <span>{period.period} </span>
            </div>
            <ul>
              {period.subjects.map((subject) => (
                <li key={subject.id}>
                  <Link to={`${subject.id}`}>{subject.subject}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
