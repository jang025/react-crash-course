import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
</Routes>
      </Router>
    </>
  );
  }
  /*
  const [isModalOpen, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
    console.log("onTodoDelete()");
  }
  function cancelModal() {
    setShowModal(false);
  }
  function confirmModal() {
    setShowModal(false);
  }

  useEffect(() => {
    console.log(`on mount AND on ${isModalOpen} change`);
  }, [isModalOpen]);
  useEffect(() => {
    console.log("on mount");
  }, []);
  useEffect(() => {
    console.log("every render");
  });
  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
        <Todo onTodoDelete={onTodoDelete} title="Land a $100k Job" />
      </div>
      {isModalOpen && (
        <Modal
          cancelModal={cancelModal}
          confirmModal={confirmModal}
          title="Confirm delete ?"
        />
      )}
    </div>
  );
}
*/

export default App;
