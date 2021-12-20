import { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { createTest } from '../services/API';
import { Item, TestContainer, Button, Form } from '../styles/AddTestStyles';
import TestInfos from '../contexts/TestInfos';

export default function AddTest() {
  const [link, setLink] = useState('');
  const [semester, setSemester] = useState('');
  const [category, setCategory] = useState('');
  const [subject, setSubject] = useState('');
  const [teacher, setTeacher] = useState('');
  const [teacherList, setTeacherList] = useState([]);
  const { testInfos } = useContext(TestInfos);
  const navigate = useNavigate();

  useEffect(() => {
    setTeacherList(testInfos.teachers);
  }, []);

  useEffect(() => {
    if (subject !== '') {
      setTeacherList(
        testInfos.teachers.filter((teacherItem) =>
          testInfos.teacherSubjects.some(
            (item) =>
              Number(item.subjectId) === Number(subject) &&
              Number(item.teacherId) === Number(teacherItem.id)
          )
        )
      );
    }
  }, [subject]);

  function insertTest(event) {
    event.preventDefault();
    const body = {
      link,
      semesterId: semester,
      categoryId: category,
      subjectId: subject,
      teacherId: teacher,
    };
    createTest(body)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Parabéns!',
          text: 'Sua prova foi inserida com sucesso!',
        });
        navigate('/');
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Opa...',
          text: 'Algo deu errado! Por favor, verifique os dados e tente novamente',
        });
      });
  }
  if (!testInfos?.semesters) {
    return <>Carregando</>;
  }
  return (
    <TestContainer>
      <Form onSubmit={insertTest}>
        <Item>
          <label>Link da prova: </label>
          <input
            placeholder="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </Item>
        <Item>
          <label>Semestre: </label>
          <select
            name="Semestre"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="" hidden>
              Semestre
            </option>
            {testInfos?.semesters.map((item) => (
              <option value={item.id} key={item.id}>
                {item.semester}
              </option>
            ))}
          </select>
        </Item>
        <Item>
          <label>Categoria: </label>
          <select
            name="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" hidden>
              Categoria
            </option>
            {testInfos?.testCategories.map((item) => (
              <option value={item.id} key={item.id}>
                {item.category}
              </option>
            ))}
          </select>
        </Item>
        <Item>
          <label>Disciplina: </label>
          <select
            name="Disciplina"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              setTeacher('');
            }}
          >
            <option value="" hidden>
              Disciplina
            </option>
            {testInfos?.subjects.map((item) => (
              <option value={item.id} key={item.id}>
                {item.subject}
              </option>
            ))}
          </select>
        </Item>
        <Item>
          <label>Professor: </label>
          <select
            name="Professor"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
          >
            <option value="" hidden>
              Professor
            </option>
            {teacherList.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </Item>
        <Button type="submit">Enviar Prova</Button>
      </Form>
    </TestContainer>
  );
}
