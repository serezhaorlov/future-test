import React from 'react';

function UserCard ({ isProfileOpen, firstName, lastName, address, description }) {

    const {streetAddress, city, state, zip } = address;

    return (
        <div className={`${isProfileOpen? "table__profile" : "table__profile table__profile_hidden"}`}>
                <div className="table__cell table__cell_profile">
                    <div className="table__cell table__cell_profile">
                        <h3 >Name</h3>
                    </div>
                    <div className="table__cell table__cell_profile">
                        <h3>Description</h3>
                    </div>
                    <div className="table__cell table__cell_profile">
                        <h3>Street</h3>
                    </div>
                    <div className="table__cell table__cell_profile">
                        <h3>City</h3>
                    </div>
                    <div className="table__cell table__cell_profile">
                        <h3>State</h3>
                    </div>
                    <div className="table__cell table__cell_profile">
                        <h3>Index</h3>
                    </div>
                </div>
                <div className="table__cell table__cell_profile">
                    <div className="table__cell table__cell_profile">
                        <p className="table__text">{ firstName + " " + lastName }</p>
                    </div>
                    <div className="table__cell table__cell_profile">
                        <p className="table__text table__text_description">{ description }</p>
                    </div>
                    <div className="table__cell table__cell_profile">
                        <p className="table__text ">{ streetAddress }</p>

                    </div>
                    <div className="table__cell table__cell_profile">
                        <p className="table__text">{ city }</p>
                    </div>
                    <div className="table__cell table__cell_profile">
                        <p className="table__text">{ state }</p>
                    </div>
                    <div className="table__cell table__cell_profile">
                        <p className="table__text">{ zip }</p>
                    </div>
                </div>

    </div>
    )
}

export default UserCard;