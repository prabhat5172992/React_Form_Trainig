const name_smaller_limit = "Name should not be less than 10 characters";
const name_greater_limit = "Name should not be more than 50 characters";
const email_error = "Please enter a valid email";
const password_error = "Please enter correct password";
const confirm_password = "Password confirmation failed";
const password_regEx = /^[A-Za-z]\w{7,14}$/;
const email_regEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const errorStr = {
  name: name_smaller_limit,
  email: email_error,
  password: password_error,
  cnfpassword: confirm_password,
};

// Validate field one by one
const validateEach = (key, value, data) => {
  if (key === "name" && value.length <= 10) return name_smaller_limit;
  if (key === "name" && value.length >= 50) return name_greater_limit;
  if (key === "password" && !password_regEx.test(value)) return password_error;
  if (key === "cnfpassword" && data.password !== data.cnfpassword)
    return confirm_password;
  if (key === "email" && !email_regEx.test(value)) return email_error;
  else return "";
};

// validate fields alltogether
const validateAll = (data) => {
  const error = {};
  if (!data) return errorStr;
  // switch (data) {
  //   case data["name"] && data["name"].length <= 10:
  //     error["name"] = name_smaller_limit;
  //     break;
  //   case data["name"] && data["name"] >= 50:
  //     error["name"] = name_greater_limit;
  //     break;
  //   case data["password"] && !password_regEx.test(data["password"]):
  //     error["password"] = password_error;
  //     break;
  //   case data["cnfpassword"] && data.password !== data.cnfpassword:
  //     error["cnfpassword"] = confirm_password;
  //     break;
  //   case data["email"] && !email_regEx.test(data["email"]):
  //     error["email"] = email_error;
  //     break;
  //   default:
  //     return error;
  // }
};

export { validateEach, validateAll };
