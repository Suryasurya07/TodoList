import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignInPage from "./components/SignInPage";
import TodoDomainPage from './components/TodoDomainPage';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        <Route path="/signup" element={<SignInPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/todo" element={<TodoDomainPage />} />
          <Route path="/" element={<LoginPage />} />  {/* Redirect to login by default */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
