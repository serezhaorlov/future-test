import React from 'react';

function Toolbar( { handleReset, handleOpenPopup, setText, text } ) {

    const searchChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form className="table__row">
            <input className="table__input" placeholder="Type to search" value={ text } onChange={ searchChange }></input>
            <button type="button" className="table__reset-btn" onClick={()=>{ handleReset('') } } >Reset</button>
            <button type="button" className="table__reset-btn" onClick={()=>{ handleOpenPopup() } } >Add</button>
        </form>
    )
}

export default Toolbar;