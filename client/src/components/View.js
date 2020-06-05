import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetails,updateTodo } from '../redux/action/todoAction';
import PropTypes from 'prop-types';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          name:this.props.todo.name,
          description:this.props.todo.description,
          duedate:this.props.todo.duedate,
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
    this.props.updateTodo(this.props.match.params.id,TodoData);
      };
      
componentDidMount() {
    this.props.getDetails(this.props.match.params.id);
}

  render() {
    const {errors}=this.props.errors;
    const {todo}=this.props.todo;
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
    if (this.props.todo.isUpdated) {
      return( 
        <div class="card-alert card green lighten-5">
        <div class="card-content green-text">
            <strong>Well done!</strong> You successfully Updated a Task
        </div>
        <button type="button"  onClick={this.sucess()}
        class="close green-text" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
        </button>
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
                placeholder={todo.name} />
          </div>
          <div className="form-group">
            <label for="description">Description</label>
            <input name="description"
             type="text" 
             value={this.state.description} 
             onChange={this.onChange} 
             className="form-control" 
             id="description"
              placeholder={todo.description} />
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
              placeholder={todo.duedate} />
               <span class="validity"></span>
          </div>
          <input type="submit" value="Submit" className="btn btn-primary" />
    </form>
  </div>
      
    );
  }
}
View.propTypes = {
    updateTodo:PropTypes.func.isRequired,
  getDetails:PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
  errors:state.errors,
  todo:state.todo
});
export default connect(mapStateToProps,
    {getDetails,updateTodo})
     (View);

