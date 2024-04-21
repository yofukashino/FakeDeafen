import { CurrentlyPressed } from "../index";
import Modules from "../lib/requiredModules";
export const cleanKeybindsCallback = (): void => {
  if (Modules.WindowInfoStore.isFocused()) CurrentlyPressed.clear();
};
