import React from "react";

class Cell extends React.Component {
  render() {
    return (
      <td
        className={`${this.props.classProp}`}
        key={`${this.props.classProp}-${this.props.rowNumber}`}
        id={`${this.props.classProp}-${this.props.rowNumber}`}
      >
        {this.props.data}
      </td>
    );
  }
}

export default Cell;
