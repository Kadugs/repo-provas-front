import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTeacherTestsById } from '../../services/API';
import ConnectionError from '../../errors/ConnectionError';
import TestsList from '../TestsList';

export default function TeacherTests() {
  const [teacherTests, setTeacherTests] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getTeacherTestsById(id)
      .then((res) => setTeacherTests(res.data))
      .catch(() => ConnectionError());
  }, []);

  if (teacherTests.length === 0) {
    return 'Carregando';
  }
  return (
    <>
      {teacherTests.map((item) => (
        <TestsList testClass={item} key={item.id} />
      ))}
    </>
  );
}
