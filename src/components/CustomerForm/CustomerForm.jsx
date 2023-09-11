import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function customerForm() {

    const history = useHistory();


    //set up dispatch
    const dispatch = useDispatch();

    //set up useSelector
    const currentTotal = useSelector(store => store.currentTotal)

    //set up useState
    const [customerName, setCustomerName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');









}




export default customerForm;