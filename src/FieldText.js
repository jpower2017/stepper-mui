import React, { Component } from "react";
import * as R from "ramda";
import TextField from "material-ui/TextField";
import {
  validate,
  isNumber,
  emailPattern,
  dateFormat,
  formatPhone,
  formatSSN,
  formatCurrency
} from "./utils/utils";

class FieldText extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }
  componentDidMount() {
    this.state = { data: this.props.data };
  }

  componentWillReceiveProps(nextProps) {
    console.log(" FIELD TEXT CWRP " + nextProps.selection);
    console.log("CWRP nextprops.data " + nextProps.data);
    if (this.props.data === nextProps.data) {
      return;
    }
    this.setState({ data: nextProps.data });
  }

  format = (value, type) => {
    if (!value) {
      return;
    }

    switch (type) {
      case "phone":
        return formatPhone(value);
      case "ssn":
        return formatSSN(value);
      case "currency":
        return formatCurrency(value);
    }
  };

  getValue = z => {
    //  return R.prop(z, this.props.data);
  };
  handleChange = event => {
    this.setState({ data: event.target.value });
    console.log("handleChange " + [event.target.value, event.target.name]);
    this.props.change(event.target.value, event.target.name);
  };
  formatLabel = (str, required) => {
    return required ? str + "*" : str;
  };
  render() {
    const { obj, data } = this.props;
    return (
      <TextField
        floatingLabelFixed={true}
        id={obj.name}
        value={this.format(this.state.data, this.props.type)}
        //  hintText={obj.title}
        floatingLabelText={this.formatLabel(obj.title, obj.required)}
        errorText={validate(this.state.data, this.props.type)}
        fullWidth={false}
        multiLine={false}
        onChange={this.handleChange}
        name={obj.name}
        style={{ width: "250px", fontSize: "20px", marginLeft: "20px" }}
        floatingLabelStyle={{ color: "#222" }}
      />
    );
  }
}

export default FieldText;
