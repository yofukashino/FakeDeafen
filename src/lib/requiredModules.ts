import { webpack } from "replugged";
import Types from "../types";

export const WindowInfoStore = webpack.getByProps<Types.WindowInfoStore>(
  "isFocused",
  "isElementFullScreen",
  "addChangeListener",
  "removeChangeListener",
);

export const SoundUtilsModule = webpack.getBySource<Types.GenericModule>("discodo:");
export const SoundUtils = {
  createSound: webpack.getFunctionBySource(SoundUtilsModule, "return new"),
  createSoundpackSound: webpack.getFunctionBySource(SoundUtilsModule, ");return"),
  playSound: webpack.getFunctionBySource(SoundUtilsModule, "getSoundpack"),
} as Types.SoundUtils;

export const KeybindUtilsModule = webpack.getBySource<Types.GenericModule>("numpad plus");
export const KeybindUtils = {
  toCombo: webpack.getFunctionBySource(KeybindUtilsModule, "numpad plus"),
  toEvent: webpack.getFunctionBySource(KeybindUtilsModule, "{keyCode:0,"),
} as Types.KeybindUtils;

export const StatusPickerClasses = webpack.getByProps<Types.StatusPickerClasses>(
  "status",
  "statusItem",
);

export const GatewayConnectionStore =
  webpack.getBySource<Types.GatewayConnectionStore>("GatewayConnectionStore");

export const MediaEngineActions = webpack.getByProps<Types.MediaEngineActions>(
  "toggleSelfMute",
  "toggleSelfDeaf",
);

export const NotificationSettingsStore = webpack.getByProps<Types.NotificationSettingsStore>(
  "getDesktopType",
  "isSoundDisabled",
);

export const PanelButton = webpack.getBySource<React.ComponentClass>("Masks.PANEL_BUTTON");

export const AccountDetailsClasses = webpack.getByProps<Types.AccountDetailsClasses>(
  "godlike",
  "container",
);

export const ElectronModule = webpack.getByProps<Types.ElectronModule>("setBadge");
