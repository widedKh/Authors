
import React from 'react';
import AllAuthors from './components/allAuthors';
import AddAuthor from './components/addAuthor';
import Update from './components/editAuthor';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Favorite authors</h1>
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<AllAuthors />}/>
               <Route path="/new" element={<AddAuthor />} />
               <Route path="/edit/:id" element={<Update />} />
           </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
