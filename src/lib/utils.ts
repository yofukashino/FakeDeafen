import { settings, util } from "replugged";
import { React, channels as UltimateChannelStore, lodash } from "replugged/common";
import { PluginInjector, PluginLogger, SettingValues } from "../index";
import {
  AccountDetailsClasses,
  GatewayConnectionStore,
  MediaEngineStore,
  SoundUtils,
} from "./requiredModules";
import { Sounds, defaultSettings } from "./consts";
import Types from "../types";

export const forceRerenderElement = async (selector: string): Promise<void> => {
  const element = await util.waitFor(selector);
  if (!element) return;
  const ownerInstance = util.getOwnerInstance(element);
  const unpatchRender = PluginInjector.instead(ownerInstance, "render", () => {
    unpatchRender();
    return null;
  });
  ownerInstance.forceUpdate(() => ownerInstance.forceUpdate(() => {}));
};

export const updateSoundStatus = (): void => {
  const Channel = UltimateChannelStore.getChannel(UltimateChannelStore.getVoiceChannelId());

  if (!Channel) return;
  PluginLogger.log("Updating Voice State.");
  GatewayConnectionStore.getSocket().voiceStateUpdate({
    channelId: Channel.id,
    guildId: Channel.guild_id,
    selfDeaf: SettingValues.get("enabled", defaultSettings.enabled)
      ? SettingValues.get("soundStatus", defaultSettings.soundStatus).deaf ||
        MediaEngineStore.isDeaf()
      : MediaEngineStore.isDeaf(),
    selfMute: SettingValues.get("enabled", defaultSettings.enabled)
      ? SettingValues.get("soundStatus", defaultSettings.soundStatus).mute ||
        MediaEngineStore.isMute()
      : MediaEngineStore.isMute(),
    selfVideo: SettingValues.get("enabled", defaultSettings.enabled)
      ? SettingValues.get("soundStatus", defaultSettings.soundStatus).video ||
        MediaEngineStore.isVideoEnabled()
      : MediaEngineStore.isVideoEnabled(),
  });
};
export const toggleSoundStatus = (enabled: boolean): void => {
  if (
    (enabled && (SettingValues.get("playAudio", defaultSettings.playAudio).disable ?? true)) ||
    (!enabled && (SettingValues.get("playAudio", defaultSettings.playAudio).enable ?? true))
  ) {
    SoundUtils.playSound(enabled ? Sounds.Disable : Sounds.Enable, 0.5);
  }
  SettingValues.set("enabled", !enabled);
  if (SettingValues.get("userPanel", defaultSettings.userPanel))
    void forceRerenderElement(`.${AccountDetailsClasses.container}:not(.spotify-modal)`);
};
export const useSetting = <
  T extends Record<string, Types.Jsonifiable>,
  D extends keyof T,
  K extends Extract<keyof T, string>,
  F extends Types.NestedType<T, P> | T[K] | undefined,
  P extends `${K}.${string}` | K,
>(
  settings: settings.SettingsManager<T, D>,
  key: P,
  fallback?: F,
): {
  value: Types.NestedType<T, P> | F;
  onChange: (newValue: Types.ValType<Types.NestedType<T, P> | F>) => void;
} => {
  const [initialKey, ...pathArray] = Object.keys(settings.all()).includes(key)
    ? ([key] as [K])
    : (key.split(".") as [K, ...string[]]);
  const path = pathArray.join(".");
  const initial = settings.get(initialKey, path.length ? ({} as T[K]) : (fallback as T[K]));
  const [value, setValue] = React.useState<Types.NestedType<T, P>>(
    path.length
      ? (lodash.get(initial, path, fallback) as Types.NestedType<T, P>)
      : (initial as Types.NestedType<T, P>),
  );

  return {
    value,
    onChange: (newValue: Types.ValType<Types.NestedType<T, P> | F>) => {
      const isObj = newValue && typeof newValue === "object";
      const value = isObj && "value" in newValue ? newValue.value : newValue;
      const checked = isObj && "checked" in newValue ? newValue.checked : void 0;
      const target =
        isObj && "target" in newValue && newValue.target && typeof newValue.target === "object"
          ? newValue.target
          : void 0;
      const targetValue = target && "value" in target ? target.value : void 0;
      const targetChecked = target && "checked" in target ? target.checked : void 0;
      const finalValue = checked ?? targetChecked ?? targetValue ?? value ?? newValue;

      setValue(finalValue as Types.NestedType<T, P>);
      settings.set(
        initialKey,
        path.length ? (lodash.set(initial, path, finalValue) as T[K]) : (finalValue as T[K]),
      );
    },
  };
};

export default { ...util, forceRerenderElement, updateSoundStatus, toggleSoundStatus, useSetting };
