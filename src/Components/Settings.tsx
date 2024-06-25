import { Category, SwitchItem } from "replugged/components";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import KeybindItem from "./KeybindItem";
import Utils from "../lib/utils";
import Types from "../types";
export const registerSettings = (): void => {
  if (typeof SettingValues.get("playAudio", defaultSettings.playAudio) === "boolean")
    SettingValues.delete("playAudio");
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value`, defaultSettings[key]);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};
export const Settings = (): React.ReactElement => {
  return (
    <div>
      <Category title="What to fake?" note="The Options you want to fake in VC." open={true}>
        <SwitchItem
          note="Whether you want to fake mute or not."
          {...Utils.useSetting(
            SettingValues,
            "soundStatus.mute",
            defaultSettings.soundStatus.mute,
          )}>
          Mute
        </SwitchItem>
        <SwitchItem
          note="Whether you want to fake deafen or not."
          {...Utils.useSetting(
            SettingValues,
            "soundStatus.deaf",
            defaultSettings.soundStatus.deaf,
          )}>
          Deafen
        </SwitchItem>
        <SwitchItem
          note="Whether you want to fake video or not."
          {...Utils.useSetting(
            SettingValues,
            "soundStatus.video",
            defaultSettings.soundStatus.video,
          )}>
          Video
        </SwitchItem>
      </Category>
      <Category
        title="Toggle Options"
        note="Ways to toggle voice status status on the current user."
        open={false}>
        <KeybindItem
          title="Toggle by keybind:"
          note="Keybind to toggle faking voice status."
          {...Utils.useSetting(SettingValues, "keybind", defaultSettings.keybind)}
        />
        <SwitchItem
          note="Show toasts on using the keybind."
          {...Utils.useSetting(SettingValues, "showToast", defaultSettings.showToast)}>
          Show toasts
        </SwitchItem>
        <SwitchItem
          note="Add an option in the status picker to toggle faking voice status."
          {...Utils.useSetting(SettingValues, "statusPicker", defaultSettings.statusPicker)}>
          Status picker
        </SwitchItem>
        <SwitchItem
          note="Add a button in the user panel to toggle showing faking voice status."
          {...Utils.useSetting(SettingValues, "userPanel", defaultSettings.userPanel)}>
          User panel
        </SwitchItem>
        <SwitchItem
          note="Add a button in the voice chat's center tray to toggle faking voice status."
          {...Utils.useSetting(SettingValues, "centerTray", defaultSettings.centerTray)}>
          Center Tray
        </SwitchItem>
        <Category
          title="Play audio"
          note="Play a sound upon using the keybind or clicking the button in the status picker or user panel."
          open={true}>
          <SwitchItem
            {...Utils.useSetting(
              SettingValues,
              "playAudio.enable",
              defaultSettings.playAudio.enable,
            )}>
            Enable
          </SwitchItem>
          <SwitchItem
            {...Utils.useSetting(
              SettingValues,
              "playAudio.disable",
              defaultSettings.playAudio.disable,
            )}>
            Disable
          </SwitchItem>
        </Category>
      </Category>
    </div>
  );
};

export default { registerSettings, Settings };
