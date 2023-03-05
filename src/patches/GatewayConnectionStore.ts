import { PluginInjector, SettingValues } from "../index";
import { GatewayConnectionStore } from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import * as Types from "../types";

export const patchGatewayConnectionStore = (): void => {
  PluginInjector.before(
    GatewayConnectionStore.getSocket(),
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
