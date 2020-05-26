import React from 'react';
import Header from './HeaderComponent';
import ControlledForm from './ControlledForm';
import ReactReduxForm from './ReactReduxForm';
import FetchExample from './FetchExample';
import CommentList from './CommentList'; 
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { fetchComments, postFeedback, postComment, fetchLeaders } from '../redux/ActionCreators';


const mapStateToProps = (state) => {
    return {
        comments: state.comments,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
      resetFeedbackForm: () => { 
        return dispatch(actions.reset('feedback'))
      },
  
      fetchComments: () => { 
        return dispatch(fetchComments());
      },
      
      postComment: (rating, author, comment) => {
        return dispatch(postComment(rating, author, comment))
      },
  
      postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => {
        return dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message))
      },

      fetchLeaders: () => {
        return dispatch(fetchLeaders());
      },
  
    })
  }

class Main extends React.Component{

    componentDidMount() {
        this.props.fetchComments();
        this.props.fetchLeaders();
      }

    render(){
        return(
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/controlform' component={ControlledForm} />
                    <Route exact path='/reactreduxform' component={() => <ReactReduxForm postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm} /> } />
                    <Route exact path='/reduxdemo' component={() => <CommentList 
                            comments={this.props.comments.comments}
                            isLoading={this.props.comments.isLoading}
                            errMess={this.props.comments.errMess}
                            postComment={this.props.postComment} />} />
                    <Route exact path='/fetchexample' component={() => <FetchExample leaders={this.props.leaders} />} />
                    <Redirect to='/controlform' />
                </Switch>

            </React.Fragment>
        )
    }
}

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(Main)));