import { toast as Toasts } from "replugged/common";
import { CurrentlyPressed, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { KeybindUtils } from "../lib/requiredModules";
import Utils from "../lib/utils";
import Types from "../types";

export const keybindListener = (e: Types.KeybindEvent): void => {
  const keybindEvents = KeybindUtils.toBrowserEvents(
    SettingValues.get("keybind", defaultSettings.keybind),
  ) as Types.KeybindEvent[];
  if (
    e.type === "keyup" &&
    keybindEvents.length &&
    keybindEvents.every(
      (ev) =>
        Object.keys(ev)
          .filter((k) => k !== "keyCode")
          .every((k) => ev[k] === e[k]) && CurrentlyPressed.get(ev.keyCode),
    )
  ) {
    const enabled = SettingValues.get("enabled", defaultSettings.enabled);
    if (SettingValues.get("showToast", defaultSettings.showToast))
      Toasts.toast(`${enabled ? "Unfaked" : "Faked"} VC Status`, Toasts.Kind.SUCCESS);
    Utils.toggleSoundStatus(enabled);
  }
  CurrentlyPressed.set(e.keyCode, e.type === "keydown");
};
