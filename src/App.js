import React, { useState } from 'react';
import './App.css';
import Profile from './Profile';
import Medicine from './Medicine';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [announcement, setAnnouncement] = useState('');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  return (
    <div className="App">
      <nav>
        <a href="#home" onClick={() => handleNavigation('home')}>Home</a>
        <a href="#medicine" onClick={() => handleNavigation('medicine')}>Medicine</a>
        <a href="#profile" onClick={() => handleNavigation('profile')}>Profile</a>
      </nav>

      {currentPage === 'home' && (
        <div className="section">
         {/* <h1>"  "</h1>*/}
          <div className="to-do-section">
            <h2>To-Do List</h2>
            <form onSubmit={handleTodoSubmit}>
              <input
                type="text"
                placeholder="Add a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
              <button type="submit">Add</button>
            </form>
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
          </div>

          <div className="announcement-section">
            <h2>Announcement</h2>
            <textarea
              placeholder="Write an announcement"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
            ></textarea>
          </div>
        </div>
      )}

      {currentPage === 'medicine' && <Medicine/>}

      {currentPage === 'profile' && <Profile />}
    </div>
  );
}

export default App;
