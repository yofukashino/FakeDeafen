import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import "./style.css";
import { registerSettings } from "./Components/Settings";
export const CurrentlyPressed = new Map();
export const PluginInjector = new Injector();
export const { utils: PluginInjectorUtils } = PluginInjector;
export const PluginLogger = Logger.plugin("FakeDeafen");
export const SettingValues = await settings.init("dev.tharki.FakeDeafen", defaultSettings);

import { applyInjections } from "./patches/index";
import { addListeners, removeListeners } from "./listeners/index";

export const start = (): void => {
  registerSettings();
  applyInjections();
  addListeners();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
  removeListeners();
};

export { default as _addPanelButton } from "./Components/AccountDetailsButton";

export { Settings } from "./Components/Settings.jsx";
