import React from 'react';
import logo from './logo.svg';
import Posts from './components/Posts';
import PostForm from './components/PostForm'
import { Provider } from 'react-redux';
import Store from './Store';
import './App.css';


function App() {
  return (
    //store hold the whole state tree of the apllication
    <Provider Store={Store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PostForm />
      <hr/>
      <Posts />
    </div>
    </Provider>
  );
}

export default App;
