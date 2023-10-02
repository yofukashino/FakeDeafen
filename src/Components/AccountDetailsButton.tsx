import { ContextMenuApi, SettingValues } from "../index";
import { PanelButton } from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import FakeDeafenContextMenu from "./ContextMenu";
import Icons from "../Components/Icons";
import Utils from "../lib/utils";
export const _addPanelButton = (): React.ReactElement | null => {
  if (!SettingValues.get("userPanel", defaultSettings.userPanel)) return null;
  const enabled = SettingValues.get("enabled", defaultSettings.enabled);
  const Icon = Icons.sound("20", "20");
  const DisabledIcon = Icons.sound(
    "20",
    "20",
    {},
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
  return (
    <PanelButton
      {...{
        onContextMenu: (event) =>
          ContextMenuApi.open(event, (e) => (
            <FakeDeafenContextMenu {...Object.assign({}, e, { onClose: ContextMenuApi.close })} />
          )),
        icon: () => (enabled ? DisabledIcon : Icon),
        tooltipText: `${enabled ? "Unfake" : "Fake"} VC Status`,
        onClick: () => {
          Utils.toggleSoundStatus(enabled);
        },
      }}
    />
  );
};
