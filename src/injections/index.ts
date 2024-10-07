import Modules from "../lib/requiredModules";
import injectAudioResolver from "./AudioResolver";
import injectCenterControlTray from "./CenterControlTray";
import injectGatewayConnection from "./GatewayConnection";
import injectSettingSetter from "./SettingValues";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  void injectAudioResolver();
  injectCenterControlTray();
  injectGatewayConnection();
  injectSettingSetter();
};

export default { applyInjections };
