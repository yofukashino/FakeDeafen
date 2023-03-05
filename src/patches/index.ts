import { patchPanelButton } from "./AccountDetails";
import { patchGatewayConnectionStore } from "./GatewayConnectionStore";
import { patchStatusPicker } from "./Menu";
import { patchSettingSetter } from "./SettingValues";
export const applyInjections = (): void => {
  patchPanelButton();
  patchGatewayConnectionStore();
  patchStatusPicker();
  patchSettingSetter();
};
