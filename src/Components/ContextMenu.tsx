import { contextMenu as ContextMenuApi } from "replugged/common";
import { ContextMenu } from "replugged/components";
import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Utils from "../lib/utils";

export default (props) => {
  const { value: muteValue, onChange: muteOnChange } = Utils.useSetting(
    SettingValues,
    "soundStatus.mute",
    defaultSettings.soundStatus.mute,
  );
  const { value: deafValue, onChange: deafOnChange } = Utils.useSetting(
    SettingValues,
    "soundStatus.deaf",
    defaultSettings.soundStatus.deaf,
  );
  const { value: videoValue, onChange: videoOnChange } = Utils.useSetting(
    SettingValues,
    "soundStatus.video",
    defaultSettings.soundStatus.video,
  );
  return (
    <ContextMenu.ContextMenu {...props} navId="tharki" onClose={ContextMenuApi.close}>
      <ContextMenu.MenuItem label="What to fake?" id="what-to-fake" />
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
    </ContextMenu.ContextMenu>
  );
};
