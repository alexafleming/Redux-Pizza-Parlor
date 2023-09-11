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
  

    

  

  return (
    <Router>
    
    <div className='container'>
    
      <Route path="/">
        {/* <Header />
        <PizzaList /> */}
      </Route>
      <Route path="/customerForm">
        {/* <Header /> */}
        <CustomerForm />
      </Route>
      <Route path="/checkout">
        {/* <Header />
        <Checkout /> */}
      </Route>
    </div>
    </Router>
  );
  }

export default App;
