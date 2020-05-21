import React from 'react';
import { Table } from 'reactstrap';

const SearchBox = ({ searchIdChange, searchTitleChange, searchYearChange, searchAuthorChange }) => {
	return(
		<React.Fragment>
			<Table>
				<thead>
					<tr>
						<input
						className='pa3 ba b--green bg-lightest-blue'
						type="search" 
						placeholder="search Id"
						onChange={searchIdChange}
						/>
						<input
						className='pa3 ba b--green bg-lightest-blue'
						type="search" 
						placeholder="search title"
						onChange={searchTitleChange}
						/>
						<input
						className='pa3 ba b--green bg-lightest-blue'
						type="search" 
						placeholder="search year"
						onChange={searchYearChange}
						/>
						<input
						className='pa3 ba b--green bg-lightest-blue'
						type="search" 
						placeholder="search author"
						onChange={searchAuthorChange}
						/>
					</tr>
				</thead>
			</Table>
		</React.Fragment>
	);
}

export default SearchBox;