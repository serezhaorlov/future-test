import React from 'react';

function TableHeader ( { handleSort } ) {

    return (
        <div className="table__row">
            <div className="table__cell" onClick={() => { handleSort('id') } }>
                <label className="table__lable">ID</label>
            </div>
            <div className="table__cell" onClick={() => { handleSort('firstName')} }>
                <label className="table__lable">First Name</label>
            </div>
            <div className="table__cell" onClick={() => { handleSort('lastName')} }>
                <label className="table__lable">Last Name</label>
            </div>
            <div className="table__cell" onClick={() => { handleSort('email')} }>
                <label className="table__lable">Email</label>
            </div>
            <div className="table__cell" onClick={() => { handleSort('phone')} }>
                <label className="table__lable">Phone</label>
            </div>
        </div>
    )
}

export default TableHeader;