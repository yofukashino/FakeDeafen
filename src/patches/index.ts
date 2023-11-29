import patchAudioResolver from "./AudioResolver";
import patchGatewayConnectionStore from "./GatewayConnectionStore";
import patchStatusPicker from "./Menu";
import patchSettingSetter from "./SettingValues";
export const applyInjections = (): void => {
  void patchAudioResolver();
  patchGatewayConnectionStore();
  patchStatusPicker();
  patchSettingSetter();
};
