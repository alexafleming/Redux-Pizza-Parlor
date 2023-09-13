import { useState } from 'react';
import { dispatch, useDispatch } from 'react-redux'

const CustomerForm = () => {
    const initialState = {
        name: '',
        address: '',
        city: '',
        zip: '',
        phone: '',
        pickup: false
    }

    const [customerInfo, setCustomerInfo] = useState(initialState)
    const dispatch = useDispatch()

    const onChange = (e) => {
        setCustomerInfo({
            ...customerInfo,
            [e.target.name]: e.target.name === 'pickup' ? e.target.checked : e.target.value    
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        useDispatch(customerInfo)
        setCustomerInfo(initialState)
    }
     
return (

<div>
    <form className='' onSubmit={onSubmit}>
        <label>Name</label>
        <input type='text' name='name' value={customerInfo.name} onChange = {onChange}></input>
        <label>Address</label>
        <input type='text' name='address' value={customerInfo.address} onChange = {onChange}></input>
        <label>City</label>
        <input type='text' name='city' value={customerInfo.city} onChange = {onChange}></input>
        <label>Zip</label>
        <input type='text' name='zip' value={customerInfo.zip} onChange = {onChange}></input>
        <label>Phone</label>
        <input type='text' name='phone' value={customerInfo.phone} onChange = {onChange}></input>
        <label>Pickup</label>
        <input type='checkbox' name='pickup' value={customerInfo.pickup}onChange = {onChange}></input>
        <button>Submit</button>
    </form>

</div>
)
}

export default CustomerForm;
