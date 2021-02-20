import React from 'react';
import Startscreen from './Startscreen';
import TableHeader from './TableHeader';
import Toolbar from './Toolbar';
import TableListItems from './TableListItems';
import AddPopup from './AddPopup';
import Loader from './Loader';
import ReactPaginate from 'react-paginate';
import { api } from '../utils/Api';

const perPage = 50;

function App() {

	const [offset, setOffset] = React.useState(null);
	const [users, setUsers] = React.useState([]);
	const [activeColumn, setActiveColumn] = React.useState('');
	const [direction, setDirection] = React.useState('');
	const [text, setText] = React.useState('');
	const [isPopupOpen, setIsPopupOpen] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);
	const [pageCount, setPageCount] = React.useState(null);
	console.log(users)
	const handleDataSet = (url) => {
		setIsLoading(true);
		api.getUsers(url)
		.then((res) => {
			setUsers(res);
			setPageCount(Math.ceil(res.length / perPage))
		})
		.catch((error) => {
			console.log(error);
		})
		.finally(() => {
			setIsLoading(false);
		})
	};



	const sorting = (column) => {
		const sortedArray = users.sort(function(a, b){

			if (a[column] < b[column]) return -1;
			if (a[column] > b[column]) return 1;

			return 0;
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
		  return data;
		};
	
		return users.filter(elem =>
			Object.values(elem)
			  .slice(0, 5)
			  .some(value => value.toString().toLowerCase().indexOf(text.toLowerCase()) !== -1)
		);
	};

	const createNewUser = (data) => {

		const newUser = {
			...data,
			address: 
				{
					streetAddress: 'street',
					city: 'moscow',
					state: 'moscow',
					zip: '114892'
				},
			description: 'some',
		};

		const newUsers = [ newUser, ...users ];

		setUsers(newUsers);
	}

	const handleOpenPopup = () => {
		setIsPopupOpen(true)
	};

	const handleClosePopup = () => {
		setIsPopupOpen(false)
	};

	const visibleItems = searchData(users.slice(offset, offset + perPage), text) //в таком сетапе у меня при нажатии на кнопку некст страницы рендерится каждый раз новый массив
	//а мне нужно по сути сделать формулу?? которая мне будет вырезать 50 элементов из массива, и вставлять следующие 50
	const handlePageClick = (e) => {
		const selectedPage = e.selected;
		setOffset(selectedPage +1);
	};

	console.log(visibleItems.length);

	return (
		<>
		{visibleItems.length === 0 && (
			<>
				<Startscreen handleDataSet={ handleDataSet }/>
				{isLoading && <Loader />}
			</>
		)}
		{visibleItems.length !== 0 && (
			<>
				<div className="table">
					<TableHeader handleSort={ sorting }/>
					<Toolbar handleReset={ setText } setText={ setText } text={ text } handleOpenPopup={ handleOpenPopup }/>
					<TableListItems users={ visibleItems }/>
					{ pageCount === 1 ? (<p className="table__page-count-one">{pageCount}</p>) : (<ReactPaginate
						previousLabel={"prev"}
						nextLabel={"next"}
						breakLabel={"..."}
						breakClassName={"pagination__break-me"}
						pageCount={pageCount}
						marginPagesDisplayed={2}
						pageRangeDisplayed={5}
						onPageChange={ handlePageClick }
						containerClassName={"pagination"}
						activeClassName={"pagination__active"}
						pageClassName={"pagination__page"}
						nextClassName={"pagination__scroll-btn"}
						previousClassName={"pagination__scroll-btn"}
					/>)}
				</div>

				<AddPopup setIsLoading={ setIsLoading } isLoading={ isLoading } isPopupOpen={ isPopupOpen } handleClosePopup={ handleClosePopup } createNewUser={ createNewUser }/>
			</>
		)}
		</>
  	);
};

export default App;

//пагинация