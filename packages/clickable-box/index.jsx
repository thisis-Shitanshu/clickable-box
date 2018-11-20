import React from "react";

class ClickableBox extends React.Component {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(event) {
    const { onClick } = this.props;

    switch (event.key) {
      case "Space":
        onClick();
        break;
      case "Enter":
        onClick();
        break;
      default:
        break;
    }
  }

  render() {
    const { innerRef, ...otherProps } = this.props;
    return (
      <span
        tabIndex="0"
        role="button"
        style={{ cursor: "pointer" }}
        onKeyDown={this.onKeyDown}
        ref={innerRef}
        {...otherProps}
      />
    );
  }
}

export default React.forwardRef((props, ref) => (
  <ClickableBox innerRef={ref} {...props} />
));