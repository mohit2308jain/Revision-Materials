import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import { postComment, postFeedback, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';

import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'; 
import Home from './HomeComponent';
import About from './AboutComponent';

const mapStateToProps = (state) => {
  return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchDishes: () => { 
      return dispatch(fetchDishes());
    },

    resetFeedbackForm: () => { 
      return dispatch(actions.reset('feedback'))
    },

    fetchComments: () => { 
      return dispatch(fetchComments());
    },

    fetchPromos: () => { 
      return dispatch(fetchPromos());
    },

    fetchLeaders: () => {
      return dispatch(fetchLeaders());
    },
    
    postComment: (dishId, rating, author, comment) => {
      return dispatch(postComment(dishId, rating, author, comment))
    },

    postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => {
      return dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message))
    }

  })
}

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {

    const DishWithId = ({match}) => {
      return(
          <DishDetail 
              dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
              isLoading={this.props.dishes.isLoading}
              errMess={this.props.dishes.errMess}
              comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
              commentsErrMess={this.props.comments.errMess}
              postComment={this.props.postComment}
          />
      );
    };

    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}
              leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
              leaderLoading={this.props.leaders.isLoading}
              leaderErrMess={this.props.leaders.errMess}
          />
      );
    }

    return (
      <div>
        <Header />
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location}>
                  <Route path='/home' component={HomePage} />
                  <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                  <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                  <Route path='/menu/:dishId' component={DishWithId} />
                  <Route exact path='/contactus' component={() => <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm} />} />
                  <Redirect to="/home" />
              </Switch>
            </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(Main)));