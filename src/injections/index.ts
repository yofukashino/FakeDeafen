import Modules from "../lib/requiredModules";
import injectAudioResolver from "./AudioResolver";
import injectCenterControlTray from "./CenterControlTray";
import injectGatewayConnectionStore from "./GatewayConnectionStore";
import injectAccountContextMenu from "./AccountContextMenu";
import injectSettingSetter from "./SettingValues";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  void injectAudioResolver();
  injectCenterControlTray();
  injectGatewayConnectionStore();
  injectAccountContextMenu();
  injectSettingSetter();
};

export default { applyInjections };
