/* 
className="table__profile-street"
className="table__profile-city"
className="table__profile-state"
className="table__profile-index"
*/



	/* 
		if (name === 'id') {
			setUsersSmall(newArray.sort(function(a, b){
				const nameA = a[name]
				const nameB = b[name]
				if (nameA < nameB) return -1
				if (nameA > nameB) return 1

				return 0
			}));
		}
		if (name === 'first') {
			setUsersSmall(newArray.sort(function(a, b){
				const nameA = a.firstName.toLowerCase();
				const nameB = b.firstName.toLowerCase();
				if (nameA < nameB) return -1
				if (nameA > nameB) return 1

				return 0
			}));
		};
		if (name === 'last') {
			setUsersSmall(newArray.sort(function(a, b){
				const nameA = a.lastName.toLowerCase();
				const nameB = b.lastName.toLowerCase();
				if (nameA < nameB) return -1
				if (nameA > nameB) return 1

				return 0
			}));
		};
		if (name === 'email') {
			setUsersSmall(newArray.sort(function(a, b){
				const nameA = a.email.toLowerCase();
				const nameB = b.email.toLowerCase();
				if (nameA < nameB) return -1
				if (nameA > nameB) return 1

				return 0
			}));
		}
		if (name === 'phone'){
			setUsersSmall(newArray.sort(function(a, b){

				const phoneA = a.phone.slice(1, 4)+a.phone.slice(5, 8)+a.phone.slice(9, a.phone.length); 
				const phoneB = b.phone.slice(1, 4)+b.phone.slice(5, 8)+b.phone.slice(9, b.phone.length);
	
				return phoneA-phoneB
			}));
		} */

		/* 
					<div className="table__row">
				<div className="table__cell" onClick={() => { sorting('id') } }>
					<label className="table__lable">ID</label>
				</div>
				<div className="table__cell" onClick={() => { sorting('firstName')} }>
					<label className="table__lable">First Name</label>
				</div>
				<div className="table__cell" onClick={() => { sorting('lastName')} }>
					<label className="table__lable">Last Name</label>
				</div>
				<div className="table__cell" onClick={() => { sorting('email')} }>
					<label className="table__lable">Email</label>
				</div>
				<div className="table__cell" onClick={() => { sorting('phone')} }>
					<label className="table__lable">Phone</label>
				</div>
			</div>
		*/

		/* 
			<>
				<div className="table">
					<TableHeader handleSort={ sorting }/>
					<Toolbar handleReset={ setText } setText={ setText } text={ text } handleOpenPopup={ handleOpenPopup }/>
					{isLoading && <Loader />}
					<TableListItems users={ visibleItems }/>
				</div>
				<AddPopup setIsLoading={ setIsLoading } isLoading={ isLoading } isPopupOpen={ isPopupOpen } handleClosePopup={ handleClosePopup } createNewUser={ createNewUser }/>
			</>

*/

/* import { api } from '../utils/Api';*/

/* 	React.useEffect(() => {
		
	}, []); */

	/* 
	    getUserSmall(){
        return fetch(this.baseSmall, {
            method: 'GET',
            headers: this.headers,
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject('error')
        });
    }
	
    getUserBig(){
        return fetch(this.baseBig, {
            method: 'GET',
            headers: this.headers,
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject('error')
        });
    }
	*/

	/* 
	const A = column === 'id' || column === 'phone'? a[column] : a[column].toLowerCase();
	const B = column === 'id' || column === 'phone'? b[column] : b[column].toLowerCase();
			
	*/