import React from 'react';
/* import { api } from '../utils/Api';
 */import TableHeader from './TableHeader';
import TableListItems from './TableListItems';
import Toolbar from './Toolbar';
import AddPopup from './AddPopup';
import Loader from './Loader';
import { smallUsersBase, bigUsersBase } from '../utils/constants'
function App() {

	const [users, setUsers] = React.useState([]);
	const [activeColumn, setActiveColumn] = React.useState('');
	const [direction, setDirection] = React.useState('');
	const [text, setText] = React.useState('');
	const [isPopupOpen, setIsPopupOpen] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);
	
/* 	React.useEffect(() => {
		setIsLoading(true);
		api.getUserSmall()
		.then((res) => {
			setUsers(res);
		})
		.catch((error) => {
			console.log(error);
		})
		.finally(() => {
			setIsLoading(false);
		})
	}, []); */

	const getUsers = (type) => async () => {
		setIsLoading(true);
	
		let url = ''
		if (type === 'small') url = smallUsersBase
		if (type === 'big') url = bigUsersBase
	
		try {
		  const res = await fetch(url)
		  const data = await res.json()
		  setUsers(data)
		} catch (err) {
			console.log(err);
		}
	
		setIsLoading(false);
	  }

	const handleOpenPopup = () => {
		setIsPopupOpen(true)
	}

	const handleClosePopup = () => {
		setIsPopupOpen(false)
	}

	const sorting = (column) => {

		const sortedArray = users.sort(function(a, b){
			const A = column === 'id' || column === 'phone'? a[column] : a[column].toLowerCase();
			const B = column === 'id' || column === 'phone'? b[column] : b[column].toLowerCase();
			
			if (A < B) return -1
			if (A > B) return 1

			return 0
		});

		if (activeColumn !== column) {
			setActiveColumn(column);
			setUsers(sortedArray);
			setDirection('a');

			return
		};
		
		setDirection(direction === 'a'? 'z' : 'a'); //меняется буква
		setUsers(direction === 'a'? sortedArray.reverse(): sortedArray); //меняется сортировка
	};

	const searchData = (data, text) => {
		if (text.length === 0){
		  return data
		}
	
		return users.filter(elem =>
			Object.values(elem)
			  .slice(0, 5)
			  .some(value => value.toString().toLowerCase().indexOf(text.toLowerCase()) !== -1)
		)
	};
	const createNewUser = (text) => {
		const newUser = {
			id: text.id,
			firstName: text.firstName,
			lastName: text.lastName,
			email: text.email,
			phone: text.phone,
			address: 
				{
					streetAddress: 'street',
					city: 'moscow',
					state: 'moscow',
					zip: '114892'
				}
				
			,
			description: 'some',

		}

		const newUsers = [ newUser, ...users ]

		setUsers(newUsers);
	}
	const visibleItems = searchData(users, text);
	
	return (
		<>
		{users.length === 0 && (
			<>
			<div className="startscreen">
				<button className="startscreen__btn" onClick={getUsers('small')}>Load small users base</button>
				<button className="startscreen__btn" onClick={getUsers('big')}>Load big users base</button>
			</div>
			{isLoading && <Loader />}
			</>
		)}
		{users.length !== 0 && (
			<>
				<div className="table">
					<TableHeader handleSort={ sorting }/>
					<Toolbar handleReset={ setText } setText={ setText } text={ text } handleOpenPopup={ handleOpenPopup }/>
					<TableListItems users={ visibleItems }/>
				</div>
				<AddPopup setIsLoading={ setIsLoading } isLoading={ isLoading } isPopupOpen={ isPopupOpen } handleClosePopup={ handleClosePopup } createNewUser={ createNewUser }/>
			</>
		)}
		</>
  	);
};

export default App;

//пагинация, разделение объема данных

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