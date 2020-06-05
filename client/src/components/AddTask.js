import React, { Component } from 'react';
import PropTypes from 'prop-types';



import { connect } from 'react-redux';
import { addTodo } from '../redux/action/todoAction';

class AddTask extends Component {
 constructor(props) {
    super(props);
    this.state = { 
      name:"",
      description:"",
      duedate:"",
    };
  }
  sucess(){
    window.location.href="/"
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const TodoData = {
      name:this.state.name,
      description:this.state.description,
      duedate:this.state.duedate
    };
this.props.addTodo(TodoData);
  };
  
  render() {
    const {errors}=this.props.errors;
    if (this.props.errors.anyErrors) {
      return( 
        <div class="card-alert card red lighten-5">
        <div class="card-content red-text">
            <strong>Oh snap!</strong>  {errors.name},{errors.description},{errors.duedate}
        </div>
        <button type="button"  onClick={window.location.reload()}
        class="close red-text" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
        </button>
    </div>
      );}
    if (this.props.todo.isAdded) {
      return( 
        <div class="card-alert card green lighten-5">
        <div class="card-content green-text">
            <strong>Well done!</strong> You successfully Added a Task
        </div>
        <button type="button"  onClick={this.sucess()}
        class="close green-text" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
        </button>
    </div>
      );
    }
    if (this.props.todo.isLoading) {
      return( <div class="preloader-background">
<div class="preloader-wrapper big active">
  <div class="spinner-layer spinner-blue-only">
    <div class="circle-clipper left">
      <div class="circle"></div>
    </div>
    <div class="gap-patch">
      <div class="circle"></div>
    </div>
    <div class="circle-clipper right">
      <div class="circle"></div>
    </div>
  </div>
</div>
</div>

      );
    }
    return (
      
  <div className="container">
    <form noValidate onSubmit={this.onSubmit}>
    <div className="form-group">
            <label for="name">Name</label>
            <input type="text" 
            name="name"
             value={this.state.name}
              onChange={this.onChange}
               className="form-control" 
               id="name"
                placeholder="NAME" />
          </div>
          <div className="form-group">
            <label for="description">Description</label>
            <input name="description"
             type="text" 
             value={this.state.description} 
             onChange={this.onChange} 
             className="form-control" 
             id="description"
              placeholder="DESCRIPTION" />
          </div>
          <div className="form-group">
            <label for="duedate">DeadLine</label>
            <input name="description"
             type="date" 
             required
             min={new Date()}
             value={this.state.duedate} 
             onChange={this.onChange} 
             className="form-control" 
             id="duedate"
              placeholder="YYY-MM-DD" />
               <span class="validity"></span>
          </div>
          <input type="submit" value="Submit" className="btn btn-primary" />
    </form>
  </div>
      
    );
  }
}
AddTask.propTypes = {
 addTodo : PropTypes.func.isRequired,
 errors:PropTypes.object.isRequired,
 todo:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  errors:state.errors,
  todo:state.todo
});
export default connect(mapStateToProps, 
  {addTodo})
  (AddTask)

