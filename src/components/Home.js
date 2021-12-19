import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Link to="/create">Adicionar Prova</Link>
      <p></p>
      <Link to="/tests">Ver provas</Link>
    </>
  );
}
