import { Injector, Logger, common, components, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import "./style.css";
import { registerSettings } from "./Components/Settings";
export const CommonConsts = {
  isUpdatingStatus: false,
};
export const PluginInjector = new Injector();
export const { utils: PluginInjectorUtils } = PluginInjector;
export const PluginLogger = Logger.plugin("FakeDeafen");
export const SettingValues = await settings.init("dev.tharki.FakeDeafen", defaultSettings);
export const {
  toast: Toasts,
  fluxDispatcher: FluxDispatcher,
  contextMenu: ContextMenuApi,
  lodash,
} = common;
export const { ContextMenu } = components;
export const CurrentlyPressed = new Map();

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

export { addPanelButton } from "./patches/AccountDetails";

export { Settings } from "./Components/Settings.jsx";
