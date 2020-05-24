import React from 'react';
import Header from './HeaderComponent';
import ControlledForm from './ControlledForm';
import ReactReduxForm from './ReactReduxForm';
import CommentList from './CommentList'; 
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addComment: (rating, author, comment) => dispatch(addComment(rating, author, comment))
    })
}

class Main extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/controlform' component={ControlledForm} />
                    <Route path='/reactreduxform' component={ReactReduxForm} />
                    <Route path='/reduxdemo' component={() => <CommentList comments={this.props.comments} addComment={this.props.addComment}/>} />
                    <Redirect to='/controlform' />
                </Switch>

            </React.Fragment>
        )
    }
}

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(Main)));