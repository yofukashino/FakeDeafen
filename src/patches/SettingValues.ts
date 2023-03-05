import { PluginInjector, PluginLogger, SettingValues } from "../index";
import * as Utils from "../lib/utils";
export const patchSettingSetter = (): void => {
  PluginInjector.after(SettingValues, "set", (args) => {
    if (args[0] === "enabled" || args[0] === "soundStatus")
      Utils.updateSoundStatus().catch((m: string): void =>
        PluginLogger.warn(`Error While Updating sound status: ${m}`),
      );
  });
};
