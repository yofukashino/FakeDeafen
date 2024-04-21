import Modules from "../lib/requiredModules";
import { cleanKeybindsCallback } from "./CleanCallback";
import { keybindListener } from "./KeybindListener";

export const addListeners = async (): Promise<void> => {
  await Modules.loadModules();
  Modules.WindowInfoStore?.addChangeListener(cleanKeybindsCallback);
  window.addEventListener("keydown", keybindListener);
  window.addEventListener("keyup", keybindListener);
};
export const removeListeners = (): void => {
  Modules.WindowInfoStore.removeChangeListener(cleanKeybindsCallback);
  window.removeEventListener("keydown", keybindListener);
  window.removeEventListener("keyup", keybindListener);
};

export default { addListeners, removeListeners };
