import { contextMenu as ContextMenuApi } from "replugged/common";
import { ContextMenu } from "replugged/components";
import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Utils from "../lib/utils";
import Types from "../types";
export default (props: Types.MenuProps | { onClose: Types.DefaultTypes.AnyFunction }) => {
  const [muteValue, muteOnChange] = Utils.useSettingArray(
    SettingValues,
    "soundStatus.mute",
    defaultSettings.soundStatus.mute,
  );
  const [deafValue, deafOnChange] = Utils.useSettingArray(
    SettingValues,
    "soundStatus.deaf",
    defaultSettings.soundStatus.deaf,
  );
  const [videoValue, videoOnChange] = Utils.useSettingArray(
    SettingValues,
    "soundStatus.video",
    defaultSettings.soundStatus.video,
  );
  return (
    <ContextMenu.ContextMenu
      {...props}
      navId="yofukashino"
      onClose={props.onClose ?? ContextMenuApi.close}>
      <ContextMenu.MenuGroup label="What to fake?">
        <ContextMenu.MenuSeparator />
        <ContextMenu.MenuCheckboxItem
          id="mute"
          label="Mute"
          checked={muteValue}
          action={() => muteOnChange(!muteValue)}
        />
        <ContextMenu.MenuCheckboxItem
          id="deafen"
          label="Deafen"
          checked={deafValue}
          action={() => deafOnChange(!deafValue)}
        />
        <ContextMenu.MenuCheckboxItem
          id="video"
          label="Video"
          checked={videoValue}
          action={() => videoOnChange(!videoValue)}
        />
      </ContextMenu.MenuGroup>
    </ContextMenu.ContextMenu>
  );
};
