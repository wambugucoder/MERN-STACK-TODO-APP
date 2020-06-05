const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateTodoInput(data){
//Validate User Input
const errors={};

//Covert Empty Fields
data.name= !isEmpty(data.name)?data.name:"";
data.description= !isEmpty(data.description)?data.description:"";
data.duedate= !isEmpty(data.duedate)?data.duedate:"";

//Validate Fields
//A. NAME_FIELD
if (Validator.isEmpty(data.name)) {
    errors.name="Name field is empty"
}
//B. description
if (Validator.isEmpty(data.description)) {
    errors.description="Description is Empty"
}

//C. DATE
if (Validator.isBefore(data.duedate,data.dateset)) {
    errors.duedate="The deadline cannot be of a past date"
}
if (Validator.isEmpty(data.duedate)) {
errors.duedate="Due date is empty"
}
//RETURN ERRORS INCASE OF ANY
return{
errors,
isValid:isEmpty(errors)
};
};