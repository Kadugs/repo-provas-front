import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTeacheTestsById } from '../../services/API';
import ConnectionError from '../../errors/ConnectionError';
import TestsList from '../TestsList';

export default function TeacherTests() {
  const [teacherTests, setTeacherTests] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getTeacheTestsById(id)
      .then((res) => setTeacherTests(res.data))
      .catch(() => ConnectionError());
  }, []);

  return (
    <>
      {teacherTests.map((item) => (
        <TestsList testClass={item} key={item.id} />
      ))}
    </>
  );
}
