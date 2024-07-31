import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CreateResume from './components/Resume/CreateResume';
import EditResume from './components/Resume/EditResume';
import ViewResume from './components/Resume/ViewResume';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/create-resume" component={CreateResume} />
          <Route path="/edit-resume/:id" component={EditResume} />
          <Route path="/view-resume/:id" component={ViewResume} />
          <Route path="/" exact component={Login} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
