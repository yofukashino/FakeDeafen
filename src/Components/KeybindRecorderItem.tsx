import { common, components } from "replugged";
import { KeybindRecorder } from "../lib/requiredModules";
import { CloseButton } from "./CloseButton";
import * as Utils from "../lib/utils";
import * as Types from "../types";
const { React } = common;
const { FormItem } = components;

export class KeybindRecorderItem extends React.Component<
  Types.KeybindRecorderItemProps,
  Types.KeybindRecorderItemState
> {
  constructor(props: Types.KeybindRecorderItemProps) {
    super(props);
    props.clearable = Utils.hasProps(props, ["clearable"]) ? true : props.clearable;
    this.state = { value: props.value };
    this.clear = this.clear.bind(this);
  }

  clear() {
    this.setState({ value: [] });
    this.props.onChange([]);
  }

  render() {
    return (
      <FormItem
        title={this.props.title}
        style={{ marginBottom: 20 }}
        note={this.props.note}
        notePosition="after"
        divider>
        <div
          {...{
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}>
          <div
            {...{
              style: {
                flexGrow: 1,
              },
            }}>
            <KeybindRecorder
              {...{
                disabled: this.props.disabled,
                defaultValue: this.state.value,
                onChange: (value: boolean | string | unknown[]) => {
                  this.setState({ value });
                  this.props.onChange(value);
                },
              }}
            />
          </div>
          {this.props.clearable && (
            <div
              {...{
                style: {
                  marginLeft: "5px",
                  color: "var(--interactive-normal)",
                  cursor: "pointer",
                },
              }}>
              <CloseButton
                {...{
                  onClick: this.clear,
                }}
              />
            </div>
          )}
        </div>
      </FormItem>
    );
  }
}
