import { patchGatewayConnectionStore } from "./GatewayConnectionStore";
import { patchStatusPicker } from "./Menu";
import { patchSettingSetter } from "./SettingValues";
export { addPanelButton } from "./AccountDetails";
export const applyInjections = (): void => {
  patchGatewayConnectionStore();
  patchStatusPicker();
  patchSettingSetter();
};
