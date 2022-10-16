import React from 'react';
import Search from './components/Search';
import './App.css';

const App = () => {
  return (
    <>
      <main className="app flex flex-col items-center p-8">
        <img className="w-32 m-8" alt="" src={`${process.env.PUBLIC_URL}static/logo.gif`} />
        <h1 className="title text-7xl pb-8">What can I feed my dog?</h1>
        <Search />
      </main>
    </>
  );
};

export default App;
