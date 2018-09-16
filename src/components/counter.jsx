import React, { Component } from "react";
let product = 1;
class Counter extends Component {
  state = {
    value: this.props.value,
   };
handelIncrement = () => {
  this.setState( { value : this.state.value + 1})
}
  

  render() {
    console.log("Props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm" onClick={() => this.handelIncrement(product)} >Increment</button>
        <button className="btn btn-danger m-2" onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
