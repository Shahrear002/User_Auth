const Validator = require('validator');
const isEmpty = require('./is-empty.js');

module.exports = validateCustomerRegisterInput = (data) => {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
  data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
  data.address = !isEmpty(data.address) ? data.address : '';
  data.postcode = !isEmpty(data.postcode) ? data.postcode : '';
  data.mobile = !isEmpty(data.mobile) ? data.mobile : '';

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = 'Firstname field is required';
  }

  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = 'Lastname field is required';
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = 'Address field is required';
  }

  if (Validator.isEmpty(data.postcode)) {
    errors.postcode = 'Postcode field is required';
  }

  if(!Validator.isInt(data.mobile)) {
      errors.mobile = 'Mobile number must contain only number'
  }

  if (!Validator.isLength(data.mobile, { min: 10, max: 12 })) {
    errors.mobile = 'Mobile number must be between 10 and 12 characters';
  }

  if (Validator.isEmpty(data.mobile)) {
    errors.mobile = 'Mobile field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
