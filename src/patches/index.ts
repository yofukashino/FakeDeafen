import patchGatewayConnectionStore from "./GatewayConnectionStore";
import patchStatusPicker from "./Menu";
import patchNotificationSettingsStore from "./NotificationSettingsStore";
import patchSettingSetter from "./SettingValues";
export const applyInjections = (): void => {
  patchGatewayConnectionStore();
  patchStatusPicker();
  patchNotificationSettingsStore();
  patchSettingSetter();
};
