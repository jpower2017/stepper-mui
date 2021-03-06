import React, { Component } from "react";
import * as R from "ramda";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

export default class FieldDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options,
      status: this.props.status
    };
  }

  componentDidMount() {
    console.log("CDM " + this.props.data);
    this.setState({
      status: this.props.data
        ? R.prop(
            "value",
            R.find(x => x.title == this.props.data, this.props.options)
          )
        : this.props.status
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log("  nextProps  " + JSON.stringify(nextProps));
    if (!nextProps.data) {
      return;
    }
    this.setState({
      status: R.prop(
        "value",
        R.find(x => x.title == nextProps.data, nextProps.options)
      )
    });
  }
  handleChange = (event, index, value) => {
    //console.log("HandlechangeDD  value: " + value);
    //console.log("e " + [event.target.value, event.name]);
    //console.log("name " + this.props.name);
    this.setState({ status: value });
    this.props.onselect(value, this.props.name);
  };
  showItems = () => {
    if (!this.state.options) {
      return;
    }
    return R.map(
      x => (
        <MenuItem
          value={x.value}
          primaryText={this.props.required ? x.title + "*" : x.title}
        />
      ),
      this.state.options
    );
  };
  render() {
    const { obj, required, name } = this.props;
    return (
      <div>
        <DropDownMenu
          name={"ddm"}
          value={this.state.status}
          onChange={this.handleChange}
          style={{
            padding: "0px",
            //fontSize: "large",
            minWidth: "280px"
          }}
        >
          {this.showItems()}
        </DropDownMenu>
      </div>
    );
  }
}
