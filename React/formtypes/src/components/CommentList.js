import React from 'react';
import { Button, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

import Loading from './LoadingComponent';

const CommentList = (props) => {

    if (props.isLoading) {
      return(
          <div className="container">
              <div className="row">            
                  <Loading />
              </div>
          </div>
      );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.comments != null){
      
      console.log('Comment: ' + props);
      
      return(
        <div className="container">
          <div className="row">
              <div className="col-12 col-md-5 m-1">
                  <RenderComments comments={props.comments} 
                     postComment={props.postComment} />
              </div>
          </div>
          
      </div>
      )
    }   
    else{
        return(
            <div></div>
        );
    }
}

export default CommentList;

const RenderComments = ({comments, postComment}) => {
    if(comments!=null){
      const comment = comments.map((comment) => {
        return(
          <div key={comment.id} className="border border-primary">
            <li className="pt-2 pr-2 pb-2">Rating: {comment.rating}</li>
            <li className="pt-2 pr-2 pb-2">{comment.comment}</li>
            <li className="pt-2 pr-2 pb-2">{`-- ${comment.author} , ${new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}`}</li>
          </div>
        ) 
      })
      return(
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">{comment}</ul>
          <CommentForm postComment={postComment} />
        </div>
      )
    }
    else{
      return(<div></div>)
    }
}

const required = (val) => {
    return (val && val.length);
  }
  
  const maxLength = (len) => (val) => {
    return (!(val) || (val.length <= len));
  }
  
  const minLength = (len) => (val) => {
    return ( val && (val.length >= len));
  }

class CommentForm extends React.Component {

    state = {
      isModalOpen: false
    }
  
    toggleModal = () => {
      this.setState({
      isModalOpen: !this.state.isModalOpen
      });
    }
  
    handleSubmit = (values) => {
      this.toggleModal();
      this.props.postComment(values.rating, values.author, values.comment);
    }
  
    render(){
      return(
        <div>
          <Button outline color="secondary" onClick={() => this.toggleModal()}>
            <span className="fa fa-pencil fa-lg"></span> Submit Comment
          </Button>
  
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
  
                <div className="form-group">
                  <Label htmlFor="rating">Rating</Label>
                  <Control.select model=".rating" name="rating"
                    className="form-control" defaultValue="1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </div>
  
                <div className="form-group">
                  <Label htmlFor="author">Your Name</Label>
                  <Control.text model=".author" id="author"
                    name="author" placeholder="Your Name"
                    className="form-control" 
                    validators={{ minLength: minLength(3), 
                      maxLength: maxLength(15)
                    }}
                  />
  
                  <Errors className="text-danger"
                    model=".author" show="touched"
                    messages={{minLength: 'Must be greater than 2 characters',
                        maxLength: 'Must be 15 characters or less'
                    }}
                  />
                </div>
  
                <div className="form-group">
                  <Label htmlFor="comment">Comment</Label>
                  <Control.textarea model=".comment" id="comment" 
                    name="comment" rows="6" 
                    className="form-control" 
                    validators={{ required
                    }}
                    />
  
                  <Errors className="text-danger"
                    model=".comment" show="touched"
                    messages={{ required: 'Required'
                    }}
                  />
                </div>
  
                <Button type="submit" value="submit" color="primary">Submit</Button>
                              
              </LocalForm>
                
            </ModalBody>
          </Modal>
        </div>
      )
    }
  }