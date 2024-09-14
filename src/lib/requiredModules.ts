import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.SoundUtilsModule = await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource("SoundUtils"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find SoundUtils Module");
    });

  Modules.SoundUtils ??= {
    createSound: webpack.getFunctionBySource(Modules.SoundUtilsModule, "return new"),
    createSoundForPack: webpack.getFunctionBySource(Modules.SoundUtilsModule, /return .\(null/),
    playSound: webpack.getFunctionBySource(Modules.SoundUtilsModule, ".play()"),
  };

  Modules.KeybindUtilsModule ??= await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource("numpad plus"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find KeybindUtils Module");
    });

  Modules.KeybindUtils ??= {
    toCombo: webpack.getFunctionBySource(Modules.KeybindUtilsModule, "numpad plus"),
    toBrowserEvents: webpack.getFunctionBySource(Modules.KeybindUtilsModule, "{keyCode:0,"),
  };

  Modules.GatewayConnection ??= await webpack
    .waitForModule<Types.GatewayConnection>(webpack.filters.bySource("CALL_CONNECT=13"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find GatewayConnection Module");
    });

  Modules.CenterControlTray ??= await webpack
    .waitForModule<Types.CenterControlTray>(
      webpack.filters.bySource(".VOICE_CONTROL_TRAY,children"),
      {
        timeout: 10000,
      },
    )
    .catch(() => {
      throw new Error("Failed To Find CenterControlTray Module");
    });

  Modules.CenterControlButton ??= await webpack
    .waitForModule(webpack.filters.bySource(".centerButton,"), { timeout: 10000 })
    .then((mod) => webpack.getFunctionBySource<Types.CenterControlButton>(mod, ".centerButton,"))
    .catch(() => {
      throw new Error("Failed To Find CenterControlButton Module");
    });

  Modules.IdleHandlerModule ??= await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource("return{preventIdle:"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find IdleHandler Module");
    });

  Modules.IdleHandler ??= {
    usePreventIdle: webpack.getFunctionBySource(Modules.IdleHandlerModule, "return{preventIdle:"),
    default: webpack.getFunctionBySource(Modules.IdleHandlerModule, "div"),
  };

  Modules.PanelButton ??= await webpack
    .waitForModule<Types.PanelButton>(webpack.filters.bySource("Masks.PANEL_BUTTON"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find PanelButton Module");
    });

  Modules.AudioResolverPromise = webpack.waitForModule<Types.AudioResolver>(
    webpack.filters.bySource("./mute.mp3"),
    { raw: true },
  );

  Modules.GatewayConnectionStore ??=
    webpack.getByStoreName<Types.GatewayConnectionStore>("GatewayConnectionStore");
  Modules.MediaEngineStore ??= webpack.getByStoreName<Types.MediaEngineStore>("MediaEngineStore");
  Modules.WindowStore ??= webpack.getByStoreName<Types.WindowStore>("WindowStore");
};

export default Modules;
