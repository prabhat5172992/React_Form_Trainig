import React, { Component } from "react";
import { Form } from "./components/form";
import { validateEach, validateAll } from "./utils/validation";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      errorMsg: {},
    };
    this.getData = this.getData.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  // Getting datafrom forms
  getData(e) {
    const { formData: data, errorMsg: errors } = this.state;
    //const { name, value } = e.target;
    data[e.target.name] = e.target.value;
    errors[e.target.name] = validateEach(e.target.name, e.target.value, data);
    this.setState({
      formData: data,
      errorMsg: errors,
    });

    console.log("values", data, errors);
  }

  // submitting data
  submitData() {
    let errors = validateAll(this.state.data);
    this.setState({
      errorMsg: errors,
    });
  }

  render() {
    return (
      <div className="App">
        <Form
          getData={this.getData}
          errors={this.state.errorMsg}
          submitData={this.submitData}
        />
      </div>
    );
  }
}
