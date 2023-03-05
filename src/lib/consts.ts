import { KeybindUtils } from "./requiredModules";
export const defaultSettings = {
  enabled: true,
  soundStatus: {
    mute: true,
    deaf: true,
    video: false,
  },
  statusPicker: true,
  userPanel: true,
  playAudio: true,
  showToast: true,
  keybind: KeybindUtils.toCombo("ctrl+d"),
};
export const Sounds = {
  Enable: "ptt_start",
  Disable: "ptt_stop",
};
