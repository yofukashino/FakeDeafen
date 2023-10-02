import { CommonConsts, PluginInjector } from "../index";
import { NotificationSettingsStore } from "../lib/requiredModules";
export default (): void => {
  PluginInjector.after(
    NotificationSettingsStore,
    "isSoundDisabled",
    ([sound]: [string], res: boolean) =>
      CommonConsts.isUpdatingStatus && ["mute", "unmute"].includes(sound) ? true : res,
  );
};
