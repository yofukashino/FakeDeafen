import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
import Types from "../types";

export default (): void => {
  const GatewayConnection = webpack.getFunctionBySource<Types.DefaultTypes.AnyFunction>(
    Modules.GatewayConnection,
    "voiceServerPing()",
  );

  PluginInjector.before(
    GatewayConnection.prototype,
    "voiceStateUpdate",
    (args: [Types.voiceStateUpdateArgs]) => {
      const [voiceStateUpdateArgs] = args;
      voiceStateUpdateArgs.selfMute = SettingValues.get("enabled", defaultSettings.enabled)
        ? SettingValues.get("soundStatus", defaultSettings.soundStatus).mute ||
          voiceStateUpdateArgs.selfMute
        : voiceStateUpdateArgs.selfMute;
      voiceStateUpdateArgs.selfDeaf = SettingValues.get("enabled", defaultSettings.enabled)
        ? SettingValues.get("soundStatus", defaultSettings.soundStatus).deaf ||
          voiceStateUpdateArgs.selfDeaf
        : voiceStateUpdateArgs.selfDeaf;
      voiceStateUpdateArgs.selfVideo = SettingValues.get("enabled", defaultSettings.enabled)
        ? SettingValues.get("soundStatus", defaultSettings.soundStatus).video ||
          voiceStateUpdateArgs.selfVideo
        : voiceStateUpdateArgs.selfVideo;
      return args;
    },
  );
};
