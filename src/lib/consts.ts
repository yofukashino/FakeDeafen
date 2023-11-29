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
  playAudio: {
    enable: true,
    disable: true,
  },
  showToast: true,
  keybind: KeybindUtils.toCombo("ctrl+d") as number[][],
};
export const Sounds = {
  Enable: "fd_start",
  Disable: "fd_stop",
  EnableURL: "https://tharkidev.github.io/files-random-host/fd_enable.mp3",
  DisableURL: "https://tharkidev.github.io/files-random-host/fd_disable.mp3",
};
