import { common, components } from "replugged";
import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import * as Utils from "../lib/utils";
import * as Types from "../types";
const { contextMenu: ContextMenuApi } = common;
const {
  ContextMenu: { MenuCheckboxItem, ContextMenu, MenuSeparator, MenuItem },
} = components;

const FakeDeafenContextMenu = (props: Types.ExtendedContextMenuArgs) => {
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
          checked: muteValue,
          action: () => muteOnChange(!muteValue as unknown as string),
        }}
      />
      <MenuCheckboxItem
        {...{
          id: "deafen",
          label: "Deafen",
          checked: deafValue,
          action: () => deafOnChange(!deafValue as unknown as string),
        }}
      />
      <MenuCheckboxItem
        {...{
          id: "video",
          label: "Video",
          checked: videoValue,
          action: () => videoOnChange(!videoValue as unknown as string),
        }}
      />
    </ContextMenu>
  );
};
export const openFakeDeafenContextMenu = (event) =>
  ContextMenuApi.open(event, ((e: Types.ContextMenuArgs) => (
    <FakeDeafenContextMenu {...Object.assign({}, e, { onClose: ContextMenuApi.close })} />
  )) as unknown as Types.ContextMenu);
