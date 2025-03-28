import { webpack } from "replugged";
import { React } from "replugged/common";
import { FormItem } from "replugged/components";
import Types from "../types";

export default (props: Types.KeybindRecorderItemProps) => {
  const KeybindRecorder = webpack.getBySource<
    React.ComponentClass<{
      disabled: boolean;
      onChange: Types.DefaultTypes.AnyFunction;
      defaultValue: number[][];
    }>
  >("handleComboChange");
  props.clearable ??= true;
  const [value, setValue] = React.useState<Array<Array<number>>>(props.value);
  const [isRecording, setRecording] = React.useState(false);
  const handleState = React.useCallback((node) => {
    if (node) {
      const nodeSetState = node.setState.bind(node);
      node.setState = (state, ...args) => {
        setRecording(state.mode === "RECORDING");
        nodeSetState(state, ...args);
      };
    }
  }, []);
  const handleChange = React.useCallback((value) => {
    setValue(value);
    props.onChange(value);
  }, []);
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
          position: "relative",
        }}>
        <KeybindRecorder
          ref={handleState}
          disabled={props.disabled}
          defaultValue={value}
          onChange={handleChange}
        />
        {props.clearable && value.length > 0 && (
          <button
            className="keybind-clear"
            onClick={() => handleChange([])}
            disabled={isRecording}
          />
        )}
      </div>
    </FormItem>
  );
};
