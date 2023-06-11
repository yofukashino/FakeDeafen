import { components } from "replugged";
import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import * as Utils from "../lib/utils";
const {
  ContextMenu: { MenuCheckboxItem, ContextMenu, MenuSeparator, MenuItem },
} = components;

export const FakeDeafenContextMenu = (props) => {
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
    <ContextMenu {...{ ...props, navId: "tharki" }}>
      <MenuItem
        {...{
          label: "What to fake?",
          id: "what-to-fake",
        }}
      />
      <MenuSeparator />
      <MenuCheckboxItem
        {...{
          id: "mute",
          label: "Mute",
          checked: muteValue as boolean,
          action: () => muteOnChange(!muteValue as unknown as string),
        }}
      />
      <MenuCheckboxItem
        {...{
          id: "deafen",
          label: "Deafen",
          checked: deafValue as boolean,
          action: () => deafOnChange(!deafValue as unknown as string),
        }}
      />
      <MenuCheckboxItem
        {...{
          id: "video",
          label: "Video",
          checked: videoValue as boolean,
          action: () => videoOnChange(!videoValue as unknown as string),
        }}
      />
    </ContextMenu>
  );
};
