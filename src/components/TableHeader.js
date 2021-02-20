import React from 'react';

function TableHeader ( { handleSort, direction } ) {

    return (
        <div className="table__row">
            <div className="table__cell" onClick={() => { handleSort('id') } }>
                <label className="table__lable">ID</label>
                {direction ==='a' && <p className="table__arrow">&#129043;</p>} {/* fix? */}
                {direction ==='z' && (<p className="table__arrow">&#129041;</p>)} 
                {direction ==='' && (<p className="table__arrow"></p>)} 
            </div>
            <div className="table__cell" onClick={() => { handleSort('firstName')} }>
                <label className="table__lable">First Name</label>
                {direction ==='a' && <p className="table__arrow">&#129043;</p>}
                {direction ==='z' && (<p className="table__arrow">&#129041;</p>)} 
                {direction ==='' && (<p className="table__arrow"></p>)} 
            </div>
            <div className="table__cell" onClick={() => { handleSort('lastName')} }>
                <label className="table__lable">Last Name</label>
                {direction ==='a' && <p className="table__arrow">&#129043;</p>}
                {direction ==='z' && (<p className="table__arrow">&#129041;</p>)} 
                {direction ==='' && (<p className="table__arrow"></p>)} 
            </div>
            <div className="table__cell" onClick={() => { handleSort('email')} }>
                <label className="table__lable">Email</label>
                {direction ==='a' && <p className="table__arrow">&#129043;</p>}
                {direction ==='z' && (<p className="table__arrow">&#129041;</p>)} 
                {direction ==='' && (<p className="table__arrow"></p>)} 
            </div>
            <div className="table__cell" onClick={() => { handleSort('phone')} }>
                <label className="table__lable">Phone</label>
                {direction ==='a' && <p className="table__arrow">&#129043;</p>}
                {direction ==='z' && (<p className="table__arrow">&#129041;</p>)} 
                {direction ==='' && (<p className="table__arrow"></p>)} 
            </div>
        </div>
    )
}

export default TableHeader;