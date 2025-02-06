import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import CenterTrayButton from "../Components/CenterTrayButton";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";
import Types from "../types";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  const { CenterControlTray } = Modules;
  const loader = webpack.getFunctionKeyBySource(
    CenterControlTray,
    "CenterControlTray: currentUser cannot be undefined",
  );

  PluginInjector.after(CenterControlTray, loader, (_args, res: Types.ReactTree) => {
    if (!SettingValues.get("centerTray", defaultSettings.centerTray)) return res;
    const Container = Utils.findInReactTree(
      res,
      (c: Types.ReactTree) => Array.isArray(c?.props?.children) && c.type === "div",
    ) as Types.ReactTree;
    if (!Container) return res;
    const Index = Container.props.children.findIndex((c) =>
      c?.props?.renderPopout?.toString()?.includes("renderInputModes"),
    );
    Container.props.children.splice(Index, 0, <CenterTrayButton />);
    return res;
  });
};
