import { webpack } from "replugged";
import * as Utils from "./utils";
import * as Types from "../types";
export const WindowInfoStore = webpack.getByProps(
  "isFocused",
  "isElementFullScreen",
  "addChangeListener",
  "removeChangeListener",
) as Types.WindowInfoStore;

export const KeybindUtils = {
  module: webpack.getBySource("numpad plus"),
  get toCombo() {
    return webpack.getFunctionBySource(this.module, "numpad plus");
  },
  get toEvent() {
    return webpack.getFunctionBySource(this.module, /(?=.*keyCode)(?=.*BROWSER)/);
  },
};

export const SoundUtils = {
  module: webpack.getBySource(/function.*\.disableSounds.*\.getSoundpack\(\).*play\(\).*return/),
  get createSound() {
    return webpack.getFunctionBySource(this.module, "return new");
  },
  get createSoundpackSound() {
    return webpack.getFunctionBySource(this.module, ");return");
  },
  get playSound() {
    return webpack.getFunctionBySource(this.module, "getSoundpack");
  },
};

export const StatusPickerClasses = webpack.getByProps(
  "status",
  "statusItem",
) as unknown as Types.StatusPickerClasses;

export const Menu = webpack.getBySource(
  "Menu API only allows Items and groups of Items as children",
) as unknown as Types.GenericModule;

export const GatewayConnectionStore = webpack.getBySource(
  "GatewayConnectionStore",
) as unknown as Types.GatewayConnectionStore;

export const MediaEngineActions = webpack.getByProps(
  "toggleSelfMute",
  "toggleSelfDeaf",
) as unknown as Types.MediaEngineActions;

export const NotificationSettingsStore = webpack.getByProps(
  "getDesktopType",
  "isSoundDisabled",
) as unknown as Types.NotificationSettingsStore;

export const PanelButton = webpack.getBySource(
  "Masks.PANEL_BUTTON",
) as unknown as Types.ComponentClass;

export const { AccountDetails } = webpack.getBySource(
  "isCopiedStreakGodlike",
) as unknown as Types.AccountDetails;
export const AccountDetailsClasses = webpack.getByProps(
  "godlike",
  "container",
) as unknown as Types.AccountDetailsClasses;
export const KeybindRecorder = webpack.getModule((m) =>
  Utils.prototypeChecker(m?.exports, ["handleComboChange", "cleanUp"]),
) as unknown as Types.ComponentClass;
