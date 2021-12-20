import { Link } from 'react-router-dom';
import { ContainerHome, PagesContainer, Logo } from '../styles/HomeStyles';

export default function Home() {
  return (
    <ContainerHome>
      <Logo>RepoProvas</Logo>
      <PagesContainer>
        <Link to="/create">Adicionar Prova</Link>
        <Link to="/tests">Ver provas</Link>
      </PagesContainer>
    </ContainerHome>
  );
}
