import React from 'react';
import TableItem from './TableItem';

function TableListItems ({ users, isProfileOpen, setIsProfileOpen }) {

    return (
        users.map((user) => { 
            
            return (
                <>
                <TableItem key={ user.id } user={ user } isProfileOpen={ isProfileOpen } setIsProfileOpen={ setIsProfileOpen }/>
                </>
            )})
    );
}

export default TableListItems;