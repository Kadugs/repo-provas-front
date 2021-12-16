import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import AddTest from './components/AddTest';
import Header from './components/Header';
import Home from './components/Home';
import ListTests from './components/ListTests';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tests" element={<ListTests />} />
        <Route exact path="/create" element={<AddTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
