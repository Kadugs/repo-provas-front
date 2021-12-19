import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { getFormInfos } from './services/API';
import GlobalStyles from './styles/GlobalStyles';
import AddTest from './components/AddTest';
import Header from './components/Header';
import Home from './components/Home';
import ListType from './components/ListType';
import SubjectsList from './components/ListBySubject/SubjectsList';
import SubjectTests from './components/ListBySubject/SubjectTests';
import TeachersList from './components/ListByTeacher/TeachersList';
import TeacherTests from './components/ListByTeacher/TeacherTests';
import TestInfos from './contexts/TestInfos';

function App() {
  const [testInfos, setTestInfos] = useState('');

  useEffect(() => {
    getFormInfos()
      .then((res) => {
        setTestInfos(res.data);
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Opa...',
          text: 'Ocorreu um erro',
        });
      });
  }, []);

  return (
    <TestInfos.Provider value={{ testInfos, setTestInfos }}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<AddTest />} />
          <Route exact path="/tests" element={<ListType />} />
          <Route exact path="/tests/by/subjects" element={<SubjectsList />} />
          <Route exact path="/tests/by/subjects/:id" element={<SubjectTests />} />
          <Route exact path="/tests/by/teachers" element={<TeachersList />} />
          <Route exact path="/tests/by/teachers/:id" element={<TeacherTests />} />
        </Routes>
      </BrowserRouter>
    </TestInfos.Provider>
  );
}

export default App;
