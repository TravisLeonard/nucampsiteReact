export function validateUserLoginForm(values) {
    const errors = {};
  
    if (!values.username) {
      errors.username = "Username is required";
    } else if (values.username.length < 2) {
      errors.username = "Username must be at least 2 characters";
    } else if (values.username.length > 15) {
      errors.username = "Username must be at most 15 characters";
    }
  
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
  
    return errors;
  }