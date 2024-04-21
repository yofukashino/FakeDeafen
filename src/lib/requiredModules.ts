import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.WindowInfoStore ??= await webpack.waitForProps<Types.WindowInfoStore>(
    "isFocused",
    "isElementFullScreen",
    "addChangeListener",
    "removeChangeListener",
  );

  Modules.SoundUtils ??= await webpack.waitForProps<Types.SoundUtils>(
    "playSound",
    "createSound",
    "createSoundForPack",
  );
  Modules.KeybindUtils ??= await webpack.waitForProps<Types.KeybindUtils>("toCombo");

  Modules.GatewayConnection ??= await webpack.waitForProps("Opcode");

  Modules.CenterControlTray ??= await webpack.waitForProps<Types.CenterControlTray>("GoLiveButton");
  Modules.CenterControlButton ??= await webpack
    .waitForProps<{
      CenterControlButton: Types.CenterControlButton;
    }>("CenterControlButton")
    .then(({ CenterControlButton }) => CenterControlButton);
  Modules.IdleHandler ??= await webpack.waitForProps<Types.IdleHandler>("usePreventIdle");
  Modules.PanelButton ??= await webpack.waitForModule<Types.PanelButton>(
    webpack.filters.bySource("Masks.PANEL_BUTTON"),
  );

  Modules.AudioResolverPromise = webpack.waitForModule<Types.AudioResolver>(
    webpack.filters.bySource("./mute.mp3"),
    { raw: true },
  );
  Modules.GatewayConnectionStore ??=
    webpack.getByStoreName<Types.GatewayConnectionStore>("GatewayConnectionStore");
  Modules.MediaEngineStore ??= webpack.getByStoreName<Types.MediaEngineStore>("MediaEngineStore");
};

export default Modules;
