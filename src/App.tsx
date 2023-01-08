import React from 'react';
import './styles/App.css';
import {
  Route,
  Routes
} from "react-router-dom";

import { Home } from './pages/Home';
import { Todo } from './pages/Todo';

function App(): JSX.Element {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo/>} />
      </Routes>
  );
}

export default App;
