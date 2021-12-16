import { useState, useEffect } from 'react';
import { createTest, getFormInfos } from '../services/API';
import { Item, TestContainer } from '../styles/AddTestStyles';
/*


  IDEIA: COLOCAR O VALUE NOS SELECT COMO O ID RECEBIDO DA API, DESSA FORMA VAI SER FACIL ENVIAR A ESTRUTURA JÁ PROONTA


*/
export default function AddTest() {
  const [state, setState] = useState('Carregando');
  const [formInfos, setFormInfos] = useState(false);
  useEffect(() => {
    getFormInfos()
      .then((infos) => {
        setFormInfos(infos);
      })
      .catch(() => {
        setState('Erro');
      });
  }, []);

  function insertTest() {
    createTest().then(() => {
      alert('criado');
    });
  }
  if (!formInfos) {
    return <>{state}</>;
  }
  return (
    <TestContainer>
      <form onSubmit={insertTest}>
        <Item>
          <label>Nome da prova: </label>
          <input placeholder="nome" />
        </Item>
        <Item>
          <label>Link da prova: </label>
          <input placeholder="link" />
        </Item>
        <Item>
          <label>Semestre: </label>
          <select>
            <option value="" hidden>
              Semestre
            </option>
          </select>
        </Item>
        <Item>
          <label>Categoria: </label>
          <select>
            <option value="" hidden>
              Categoria
            </option>
          </select>
        </Item>
        <Item>
          <label>Disciplina: </label>
          <select>
            <option value="" hidden>
              Disciplina
            </option>
          </select>
        </Item>
        <Item>
          <label>Professor: </label>
          <select>
            <option value="" hidden>
              Professor
            </option>
          </select>
        </Item>
      </form>
    </TestContainer>
  );
}
