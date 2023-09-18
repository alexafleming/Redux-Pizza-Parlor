import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Components
import CustomerForm from '../CustomerForm/CustomerForm';

function App() {
  
  const [pizzas, setPizzas] = useState([]);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  <CustomerForm />
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  useEffect(() => { 
    fetchPizzaOptions();
  }, [])

  const fetchPizzaOptions = () => {
    axios.get('/api/pizza')
    .then( response => {
      dispatch({ type: 'SET_PIZZAS', payload: response.data})
    })
    .catch( error => {
      console.log(error);
      alert('Could not get pizzas at this time.')
    })
  }
  

export default App;
