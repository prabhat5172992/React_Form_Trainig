import React from "react";

export const Form = (props) => {
  const { errors, getData, submitData } = props;
  return (
    <div className="formBox">
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={getData}
      />
      {errors && errors["name"] ? (
        <div className="display_err">{errors["name"]}</div>
      ) : null}
      <input
        type="password"
        name="password"
        placeholder="enter your password"
        onChange={getData}
      />
      {errors && errors["password"] ? (
        <div className="display_err">{errors["password"]}</div>
      ) : null}
      <input
        type="password"
        name="cnfpassword"
        placeholder="Confirm your password"
        onChange={getData}
      />
      {errors && errors["cnfpassword"] ? (
        <div className="display_err">{errors["cnfpassword"]}</div>
      ) : null}
      <input
        type="email"
        name="email"
        placeholder="Enter your Email"
        onChange={getData}
      />
      {errors && errors["email"] ? (
        <div className="display_err">{errors["email"]}</div>
      ) : null}
      <button type="button" onClick={submitData}>
        Submit
      </button>
    </div>
  );
};
