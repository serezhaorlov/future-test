import React from 'react';
import Loader from './Loader';

function AddPopup ({ isPopupOpen, handleClosePopup, createNewUser, isLoading, setIsLoading }) {
    const [id, setID] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    
    const onIdChange = (e) => {
        setID(e.target.value);
    }

    const onFNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const onLNameChange = (e) => {
        setLastName(e.target.value);
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const onPhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
        }

        createNewUser(newUser);
        setID('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        handleClosePopup();
    }

    const closePopuponOverlay = (evt) => { 
        if (evt.target === evt.currentTarget){
            handleClosePopup()
        }
    }

    return (
        <div className={`${isPopupOpen ? "popup popup_is-open" : "popup"}`} onClick={(evt)=>{ closePopuponOverlay(evt) }}>
            <form className="popup__form" onSubmit={ handleSubmit }>
                <h3 className="popup__title">Enter user info</h3>
                <input className="popup__input" name="id" placeholder="Type ID" type="text" required value={ id } onChange={ onIdChange }></input>
                <input className="popup__input" name="firstName" placeholder="Type first name" type="text" required value={ firstName } onChange={ onFNameChange }></input>
                <input className="popup__input" name="lastName" placeholder="Type last name" type="text" required  value={ lastName }  onChange={ onLNameChange }></input>
                <input className="popup__input" name="email" placeholder="Type email" type="email" required value={ email }  onChange={ onEmailChange }></input>
                <input className="popup__input" name="phone" placeholder="Type phone" type="phone" required value={ phone }  onChange={ onPhoneChange }></input>
                <button className="popup__submit-btn" type="submit" >Add</button>
                <button className="popup__close-btn" type="button" onClick={() => { handleClosePopup() }}></button> {/* loader */}
            </form>
        </div>
    )
}

export default AddPopup;