import { toast as Toasts } from "replugged/common";
import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Utils from "../lib/utils";
import Listeners from "../lib/Keybind";

const KeybindListener = new Listeners();

export const addListeners = (): void => {
  const KeyCode = SettingValues.get("keybind", defaultSettings.keybind);
  // Not Global Because https://discord.com/channels/919649417005506600/919727473233649674/1355126497580417044
  if (KeyCode.length)
    KeybindListener.addListener(KeyCode, () => {
      const enabled = SettingValues.get("enabled", defaultSettings.enabled);
      if (SettingValues.get("showToast", defaultSettings.showToast))
        Toasts.toast(`${enabled ? "Unfaked" : "Faked"} VC Status`, Toasts.Kind.SUCCESS);
      Utils.toggleSoundStatus(enabled);
    });
};
export const removeListeners = (): void => {
  KeybindListener.unlistenAll();
};

export const renewListeners = (): void => {
  removeListeners();
  addListeners();
};

export default { addListeners, removeListeners, renewListeners };
