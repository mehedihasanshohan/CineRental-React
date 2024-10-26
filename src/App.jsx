import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import MovieList from './components/MovieList';
import Sidebar from './components/Sidebar';
import { MovieContext } from './context';

function App() {
  const [cartData, setCartData] =useState([]);

  return (
    <>
    <MovieContext.Provider value={{cartData, setCartData}}>
      <Header></Header>
      <main>
		      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
           <Sidebar></Sidebar>
           <MovieList></MovieList>
          </div>
      </main>
      </MovieContext.Provider>
    </>
  )
}

export default App
