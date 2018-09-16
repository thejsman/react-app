import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };
  handelDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
    console.log("Event Handeler called ", counterId);
  };
  handelReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handelIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter};
    counters[index].value++;
    this.setState({ counters })
    console.log(counter);
  }
  render() {
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={this.handelReset}>Reset</button>
        {this.state.counters.map(counter => (
          <Counter
            onDelete={this.handelDelete}
            onIncrement = {this.handelIncrement}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
