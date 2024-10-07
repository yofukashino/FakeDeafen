import { plugins } from "replugged";
import { contextMenu as ContextMenuApi, React } from "replugged/common";
import { SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import FakeDeafenContextMenu from "./ContextMenu";
import Icons from "../Components/Icons";
import Utils from "../lib/utils";
export default () => {
  if (
    !SettingValues.get("userPanel", defaultSettings.userPanel) ||
    plugins.getDisabled().includes("dev.tharki.FakeDeafen")
  )
    return null;
  const [enabled, setEnabled] = React.useState(
    SettingValues.get("enabled", defaultSettings.enabled),
  );
  React.useEffect(() => {
    setEnabled(SettingValues.get("enabled", defaultSettings.enabled));
  }, [SettingValues.get("enabled", defaultSettings.enabled)]);

  const Icon = <Icons.sound width="20" height="20" />;
  const DisabledIcon = (
    <Icons.sound width="20" height="20">
      <polygon
        style={{
          fill: "#a61616",
        }}
        points="22.6,2.7 22.6,2.8 19.3,6.1 16,9.3 16,9.4 15,10.4 15,10.4 10.3,15 2.8,22.5 1.4,21.1 21.2,1.3 "
      />
    </Icons.sound>
  );
  return (
    <Modules.PanelButton
      onContextMenu={(event) =>
        ContextMenuApi.open(event, (props) => (
          <FakeDeafenContextMenu onClose={ContextMenuApi.close} {...props} />
        ))
      }
      icon={() => (enabled ? DisabledIcon : Icon)}
      tooltipText={`${enabled ? "Unfake" : "Fake"} VC Status`}
      onClick={() => Utils.toggleSoundStatus(enabled)}
    />
  );
};
