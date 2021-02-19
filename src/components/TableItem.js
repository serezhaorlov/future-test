import React from 'react';
import UserCard from './UserCard'

function TableItem ({ user }) {

    const [isProfileOpen, setIsProfileOpen] = React.useState(false);

    const { id, firstName, lastName, email, phone, address, description } = user;

    const openFullProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };
    
    return (
            <>
            <div className="table__row" onClick={()=> openFullProfile() }>
                <div className="table__cell">
                    <label className="table__lable">{ id }</label>
                </div>
                <div className="table__cell">
                    <label className="table__lable">{ firstName }</label>
                </div>
                <div className="table__cell">
                    <label className="table__lable">{ lastName }</label>
                </div>
                <div className="table__cell">
                    <label className="table__lable">{ email }</label>
                </div>
                <div className="table__cell">
                    <label className="table__lable">{ phone }</label>
                </div>
            </div>
            <UserCard key={ id } isProfileOpen={ isProfileOpen } 
                firstName={ firstName } lastName={ lastName } address={ address } description={ description }
            />
            </>
        )
    }


export default TableItem;