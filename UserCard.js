import React from 'react';

function UserCard ({ isProfileOpen, firstName, lastName, address, description }) {

    const {streetAddress, city, state, zip } = address;

    return (
        <div className={`${isProfileOpen? "table__profile" : "table__profile table__profile_hidden"}`}>
            <div className="table__row table__row_profile">
                <div className="table__cell table__cell_profile">
                    <h2>Name</h2>
                </div>
                <div className="table__cell table__cell_profile">
                    <h2>Description</h2>
                </div>
                <div className="table__cell table__cell_profile">
                    <h2>Street</h2>
                </div>
                <div className="table__cell table__cell_profile">
                    <h2>City</h2>
                </div>
                <div className="table__cell table__cell_profile">
                    <h2>State</h2>
                </div>
                <div className="table__cell table__cell_profile">
                    <h2>Index</h2>
                </div>
            </div>
            <div className="table__row table__row_profile">
                <div className="table__cell table__cell_profile">
                    <p>{ firstName + " " + lastName }</p>
                </div>
                <div className="table__cell table__cell_profile">
                    <p>{ description }</p>
                </div>
                <div className="table__cell table__cell_profile">
                    <p>{ streetAddress }</p>
                </div>
                <div className="table__cell table__cell_profile">
                    <p>{ city }</p>
                </div>
                <div className="table__cell table__cell_profile">
                    <p>{state}</p>
                </div>
                <div className="table__cell table__cell_profile">
                    <p>{zip}</p>
                </div>
        </div>
    </div>
    )
}

export default UserCard;