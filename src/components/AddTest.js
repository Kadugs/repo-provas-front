import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { createTest, getFormInfos } from '../services/API';
import { Item, TestContainer } from '../styles/AddTestStyles';

export default function AddTest() {
  const [state, setState] = useState('Carregando');
  const [formInfos, setFormInfos] = useState({});
  const [link, setLink] = useState('');
  const [semester, setSemester] = useState('');
  const [category, setCategory] = useState('');
  const [subject, setSubject] = useState('');
  const [teacher, setTeacher] = useState('');
  const [teacherList, setTeacherList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFormInfos()
      .then((res) => {
        setFormInfos(res.data);
        setTeacherList(res.data?.teachers);
      })
      .catch(() => {
        setState('Erro');
      });
  }, []);

  useEffect(() => {
    if (subject !== '') {
      setTeacherList(
        formInfos.teachers.filter((teacherItem) =>
          formInfos.teacherSubjects.some(
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
  if (!formInfos?.semesters) {
    return <>{state}</>;
  }
  /*

  alguns professores específicos dão algumas das disciplinas.
   Então pra facilitar o cadastro de provas, após a pessoa selecionar
   a disciplina, só são exibidos os professores que dão aquela disciplina.

   */
  return (
    <TestContainer>
      <form onSubmit={insertTest}>
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
            {formInfos?.semesters.map((item) => (
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
            {formInfos?.testCategories.map((item) => (
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
            {formInfos?.subjects.map((item) => (
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
        <button type="submit">Enviar Prova</button>
      </form>
    </TestContainer>
  );
}
