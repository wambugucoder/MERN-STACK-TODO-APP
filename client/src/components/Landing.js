import React, { Component } from 'react';
import { getTodo, deleteTodo } from '../redux/action/todoAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DarkTheme, { createTheme } from 'react-dark-theme'


const lightTheme = {
    background: 'white',
    text: 'black',
  }
  
  const darkTheme = {
    background: 'black',
    text: 'white',
  }
  
  const myTheme = createTheme(darkTheme, lightTheme)
class Landing extends Component {
  componentDidMount() {
      this.props.getTodo();
  }
delete(id){
this.props.deleteTodo(id);
window.location.reload();
}
view(id){
  this.props.history.push(`/view/${id}`);
  }
  render() {
      const {todo}=this.props.todo;
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
        <div style={{ backgroundColor: myTheme.background, color: myTheme.text }}>
        <DarkTheme light={lightTheme} dark={darkTheme} />
        <div class="row">
      
      {  todo.map((todo,index) => (
            <ul key={index}> 
            <div class="col m4">
            <div class="col m4 offset-m4 s12">
      <div class="flip-container" ontouchstart="this.classList.toggle('hover')">
      <div class="flipper">
            <div class="front">			
                <div class="row">
                  <div class="col s12 m12">
                        <div class="card black darken-1">
                          <div class="card-content white-text">
                            <span class><b>Name:</b> {todo.name}</span>
                            <p><b>Description:</b> {todo.description}</p>
                          </div>
                          <div class="card-action white-text">
                          <p><b>Completed:</b> {todo.completed.toString()}</p>
                          </div>
                        </div>
                  </div>
                  </div>
              </div>
          <div class="back">			
                <div class="row">
                  <div class="col s12">
                    <div class="card white">
                      <div class="card-content black-text">
                        <span class><b>Due:</b> {todo.duedate}</span>
                        <p><b>DateSet:</b> {todo.dateset}.</p>
                      </div>
                       <div class="card-action">
                   
                       <button onClick={()=>this.delete(todo._id)}
                       class="waves-effect waves-light btn black-text"><i class="material-icons left">delete</i></button>
                       <button onClick={()=>this.view(todo._id)}
                       class="waves-effect waves-light btn black-text"><i class="material-icons left">create</i></button>             
                       </div>
                    </div>
                  </div>
                </div>
          </div>
          </div>
     
     </div>
     </div>
               </div>
          </ul>
           
            ))
        }
            
   
  </div>
         
      </div>
      
    );
  }
}

Landing.propTypes = {
  deleteTodo:PropTypes.func.isRequired,
 getTodo:PropTypes.func.isRequired,
    todo:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  errors:state.errors,
  todo:state.todo
});

export default connect(mapStateToProps, 
    {getTodo,deleteTodo})
    (Landing);