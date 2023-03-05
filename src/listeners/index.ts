import { WindowInfoStore } from "../lib/requiredModules";
import { cleanKeybindsCallback } from "./CleanCallback";
import { keybindListener } from "./KeybindListener";

export const addListeners = (): void => {
  WindowInfoStore.addChangeListener(cleanKeybindsCallback);
  window.addEventListener("keydown", keybindListener);
  window.addEventListener("keyup", keybindListener);
};
export const removeListeners = (): void => {
  WindowInfoStore.removeChangeListener(cleanKeybindsCallback);
  window.removeEventListener("keydown", keybindListener);
  window.removeEventListener("keyup", keybindListener);
};
