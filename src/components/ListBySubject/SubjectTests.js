import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSubjectTestsById } from '../../services/API';
import ConnectionError from '../../errors/ConnectionError';
import TestsList from '../TestsList';

export default function SubjectTests() {
  const [subjectTests, setSubjectTests] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    getSubjectTestsById(id)
      .then((res) => {
        setSubjectTests(res.data);
      })
      .catch(() => ConnectionError());
  }, []);

  if (!subjectTests) {
    return 'Carregando';
  }
  return (
    <>
      {subjectTests.map((item) => (
        <TestsList testClass={item} key={item.id} />
      ))}
    </>
  );
}
