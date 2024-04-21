import CenterTrayButton from "../Components/CenterTrayButton";
import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";
import Types from "../types";
export default (): void => {
  PluginInjector.after(Modules.CenterControlTray, "default", (_args, res: Types.ReactTree) => {
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
