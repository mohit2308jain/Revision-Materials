import React, {Component} from 'react';
import SearchBox from './RobotComponents/SearchBox';
import CardList from './RobotComponents/CardList';
import Scroll from './RobotComponents/Scroll';
import ErrorBoundary from './RobotComponents/ErrorBoundary';
import './Robots.css';

import { connect } from 'react-redux';
import { setSearchField, requestRobots } from './redux/actions';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		//can name this anything
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
	
		//onRequestRobots: () => dispatch(requestRobots())
		onRequestRobots: () => requestRobots(dispatch)
	}
}

class App extends Component {
	
	componentDidMount(){
		this.props.onRequestRobots();
	}

	render() 
	{
		const { searchField, onSearchChange, robots, isPending } = this.props
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		if (isPending){
			return (<h1 className='tc f1'>Loading</h1>);
		}
		else{
			return(
				<div className='tc demo'>
				  <h1 className='f1'>RoboFriends</h1>
	     		  <SearchBox searchChange={onSearchChange}/>
		    	  <Scroll>
					  <ErrorBoundary>
					  <CardList robots={filteredRobots} />
					  </ErrorBoundary>
		    	  </Scroll>
		    	</div>
		    );
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);