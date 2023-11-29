import { webpack } from "replugged";
import { React } from "replugged/common";
import { FormItem } from "replugged/components";
import Icons from "./Icons";
import Types from "../types";

export default (props: Types.KeybindRecorderItemProps) => {
  const KeybindRecorder = webpack.getBySource<
    React.ComponentClass<{
      disabled: boolean;
      onChange: Types.DefaultTypes.AnyFunction;
      defaultValue: number[][];
    }>
  >("handleComboChange");
  props.clearable = props.clearable ?? true;
  const [value, setValue] = React.useState<Array<Array<number>>>(props.value);
  const clear = () => {
    setValue([]);
    props.onChange([]);
  };
  return (
    <FormItem
      title={props.title}
      style={{ marginBottom: 20 }}
      note={props.note}
      notePosition="after"
      divider={true}>
      <div
        className="keybindRecorder-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <div style={{ flexGrow: 1 }}>
          <KeybindRecorder
            disabled={props.disabled}
            defaultValue={value}
            onChange={(newValue) => {
              setValue(newValue);
              props.onChange(newValue);
            }}
          />
        </div>
        {props.clearable && value.length > 0 && (
          <div
            style={{
              marginLeft: "5px",
              color: "var(--interactive-normal)",
              cursor: "pointer",
            }}>
            <Icons.closeButton className="closeButton" onClick={clear} />
          </div>
        )}
      </div>
    </FormItem>
  );
};
