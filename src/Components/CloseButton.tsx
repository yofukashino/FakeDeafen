import { common } from "replugged";
import * as Types from "../types";
const { React } = common;
export class CloseButton extends React.Component<Types.CloseButtonProps> {
  render() {
    const size = this.props.size || "16px";
    return React.createElement(
      "svg",
      {
        className: this.props.className || "",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        style: { width: size, height: size },
        onClick: this.props.onClick,
      },
      React.createElement("path", {
        d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z",
      }),
    );
  }
}
