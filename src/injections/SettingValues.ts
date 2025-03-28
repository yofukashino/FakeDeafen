import { PluginInjector, PluginLogger, SettingValues } from "../index";
import Utils from "../lib/utils";
import Listeners from "../listeners";
export default (): void => {
  PluginInjector.after(SettingValues, "set", (args) => {
    if (args[0] === "enabled" || (args[0] === "soundStatus" && SettingValues.get("enabled"))) {
      try {
        Utils.updateSoundStatus();
      } catch (err) {
        PluginLogger.warn(`Error While Updating sound status: ${err}`);
      }
    }
    if (args[0] === "keybind") Listeners.renewListeners();
  });
};
