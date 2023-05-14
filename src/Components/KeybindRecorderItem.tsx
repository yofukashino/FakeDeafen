import { common, components } from "replugged";
import { KeybindRecorder } from "../lib/requiredModules";
import CloseButton from "./CloseButton";
import * as Types from "../types";
const { React } = common;
const { FormItem } = components;

export default (props: Types.KeybindRecorderItemProps) => {
  props.clearable = props.clearable ?? true;
  const [value, setValue] = React.useState(props.value);
  const clear = () => {
    setValue([]);
    props.onChange([]);
  };
  return (
    <FormItem
      {...{
        title: props.title,
        style: { marginBottom: 20 },
        note: props.note,
        notePosition: "after",
        divider: true,
      }}>
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
              disabled: props.disabled,
              defaultValue: value,
              onChange: (value) => {
                setValue(value);
                props.onChange(value);
              },
            }}
          />
        </div>
        {props.clearable && (
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
                onClick: () => clear(),
              }}
            />
          </div>
        )}
      </div>
    </FormItem>
  );
};
