import { common, components, webpack } from "replugged";
import CloseButton from "./CloseButton";
import Types from "../types";
const { React } = common;
const { FormItem } = components;

export default (props: Types.KeybindRecorderItemProps) => {
  const KeybindRecorder = webpack.getBySource<React.ComponentClass>("handleComboChange");
  props.clearable = props.clearable ?? true;
  const [value, setValue] = React.useState<Array<Array<number>>>(props.value);
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
          className: "keybindRecorder-container",
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
        {props.clearable && value.length && (
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
                className: "closeButton",
                onClick: () => clear(),
              }}
            />
          </div>
        )}
      </div>
    </FormItem>
  );
};
