import { webpack } from "replugged";
import Types from "../types";

export const WindowInfoStore = webpack.getByProps<Types.WindowInfoStore>(
  "isFocused",
  "isElementFullScreen",
  "addChangeListener",
  "removeChangeListener",
);

export const SoundUtils = webpack.getByProps<Types.SoundUtils>(
  "playSound",
  "createSound",
  "createSoundForPack",
);

export const KeybindUtils = webpack.getByProps<Types.KeybindUtils>("toCombo");

export const StatusPickerClasses = webpack.getByProps<Types.StatusPickerClasses>(
  "status",
  "statusItem",
);

export const GatewayConnectionStore =
  webpack.getBySource<Types.GatewayConnectionStore>("GatewayConnectionStore");

export const MediaEngineStore = webpack.getByStoreName<Types.MediaEngineStore>("MediaEngineStore");

export const PanelButton = webpack.getBySource<
  React.ComponentClass<{
    onContextMenu?: (event: React.MouseEvent) => void;
    icon?: () => React.ReactNode;
    tooltipText?: string;
    onClick?: () => void;
  }>
>("Masks.PANEL_BUTTON");

export const AccountDetailsClasses = webpack.getByProps<Types.AccountDetailsClasses>(
  "godlike",
  "container",
);

export const AudioResolverPromise = webpack.waitForModule<{
  exports: Types.DefaultTypes.AnyFunction;
}>(webpack.filters.bySource("./mute.mp3"), { raw: true });
