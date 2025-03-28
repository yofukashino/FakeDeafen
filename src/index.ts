import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import "./style.css";
export const PluginInjector = new Injector();
export const { utils: PluginInjectorUtils } = PluginInjector;
export const PluginLogger = Logger.plugin("FakeDeafen", "#b380ff");
export const SettingValues = await settings.init("dev.tharki.FakeDeafen", defaultSettings);
export const CurrentlyPressed = new Map();
import Settings from "./Components/Settings";
import Injections from "./injections/index";
import Listeners from "./listeners/index";

export const start = (): void => {
  Settings.registerSettings();
  void Injections.applyInjections()
    .then(() => Listeners.addListeners())
    .catch((err) => PluginLogger.error(err));
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
  Listeners.removeListeners();
};

export { Settings } from "./Components/Settings.jsx";

export { _addPanelButton, _addProfileItem } from "./plaintextFunctions";
