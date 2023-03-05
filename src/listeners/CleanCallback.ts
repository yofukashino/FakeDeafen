import { CurrentlyPressed } from "../index";
import { WindowInfoStore } from "../lib/requiredModules";
export const cleanKeybindsCallback = (): void => {
  if (WindowInfoStore.isFocused()) CurrentlyPressed.clear();
};
