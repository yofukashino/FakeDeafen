import Modules from "./requiredModules";
import EnableURL from "../assets/fd_enable.mp3";
import DisableURL from "../assets/fd_disable.mp3";
export const defaultSettings = {
  enabled: true,
  soundStatus: {
    mute: true,
    deaf: true,
    video: false,
  },
  statusPicker: true,
  userPanel: true,
  centerTray: true,
  playAudio: {
    enable: true,
    disable: true,
  },
  showToast: true,
  get keybind() {
    return Modules.KeybindUtils.toCombo("ctrl+d") as number[][];
  },
};
export const Sounds = {
  Enable: "fd_start",
  Disable: "fd_stop",
  EnableURL,
  DisableURL,
};
