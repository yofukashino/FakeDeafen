import { PluginInjector, SettingValues } from "../index";
import { AccountDetails, PanelButton } from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import { openFakeDeafenContextMenu } from "../Components/ContextMenu";
import * as Icons from "../Components/Icons";
import * as Utils from "../lib/utils";
import * as Types from "../types";
export const patchPanelButton = (): void => {
  PluginInjector.after(
    AccountDetails.prototype,
    "render",
    (args: [], res: Types.ReactElement): Types.ReactElement => {
      if (!SettingValues.get("userPanel", defaultSettings.userPanel)) return res;
      const flexBox = Utils.findInReactTree(res, (m: Types.ReactElement) =>
        Utils.hasProps(m?.props, ["basis", "children", "grow", "shrink"]),
      );
      if (!flexBox) return res;
      const {
        props: { children },
      } = flexBox as Types.ReactElement;
      const enabled = SettingValues.get("enabled", defaultSettings.enabled);
      const Icon = Icons.sound("20", "20");
      const DisabledIcon = Utils.addChilds(
        Icon,
        <polygon
          {...{
            style: {
              fill: "#a61616",
            },
            points:
              "22.6,2.7 22.6,2.8 19.3,6.1 16,9.3 16,9.4 15,10.4 15,10.4 10.3,15 2.8,22.5 1.4,21.1 21.2,1.3 ",
          }}
        />,
      );
      children.unshift(
        <PanelButton
          {...{
            onContextMenu: openFakeDeafenContextMenu,
            icon: () => (enabled ? Icon : DisabledIcon),
            tooltipText: `${enabled ? "Unfake" : "Fake"} VC Status`,
            onClick: () => {
              Utils.toggleSoundStatus(enabled);
            },
          }}
        />,
      );
      return res;
    },
  );
};
