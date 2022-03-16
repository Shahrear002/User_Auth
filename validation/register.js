const Validator = require('validator');
const isEmpty = require('./is-empty.js');

module.exports = validateRegisterInput = (data) => {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';
  data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
  data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isLength(data.username, { min: 6, max: 30 })) {
    errors.username = 'Username must be between 6 and 30 characters';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username field is required';
  }

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = 'Firstname field is required';
  }

  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = 'Lastname field is required';
  }

  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = 'Password must be between 8 and 30 characters';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
