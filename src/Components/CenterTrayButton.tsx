import { webpack } from "replugged";
import { React, components } from "replugged/common";
import { SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import FakeDeafenContextMenu from "./ContextMenu";
import Icons from "../Components/Icons";
import Utils from "../lib/utils";
import Types from "../types";

const Popout = webpack.getFunctionBySource<Types.Popout>(
  components,
  "Unsupported animation config:",
);
export default (): React.ReactElement | null => {
  if (!SettingValues.get("centerTray", defaultSettings.centerTray)) return null;
  const [enabled, setEnabled] = React.useState(
    SettingValues.get("enabled", defaultSettings.enabled),
  );
  React.useEffect(() => {
    setEnabled(SettingValues.get("enabled", defaultSettings.enabled));
  }, [SettingValues.get("enabled", defaultSettings.enabled)]);
  const Icon = <Icons.sound width="20" height="20" className="fake-deafen-enabled" />;
  const DisabledIcon = (
    <Icons.sound width="20" height="20" className="fake-deafen-disabled">
      <polygon
        style={{
          fill: "#a61616",
        }}
        points="22.6,2.7 22.6,2.8 19.3,6.1 16,9.3 16,9.4 15,10.4 15,10.4 10.3,15 2.8,22.5 1.4,21.1 21.2,1.3 "
      />
    </Icons.sound>
  );
  return (
    <Popout
      renderPopout={({ closePopout }: { closePopout: Types.DefaultTypes.AnyFunction }) => {
        const { preventIdle, allowIdle } = Modules.IdleHandler!.usePreventIdle("popup");
        React.useEffect(() => {
          preventIdle();
          return () => allowIdle();
        }, [preventIdle, allowIdle]);
        return (
          <React.Fragment>
            <FakeDeafenContextMenu onClose={closePopout} />
          </React.Fragment>
        );
      }}
      align="center"
      position="top"
      animation={Popout.Animation.FADE}>
      {({
        onClick: onPopoutClick,
        "aria-expanded": popoutOpen,
      }: {
        onClick: Types.DefaultTypes.AnyFunction;
        "aria-expanded": boolean;
      }) => {
        return (
          <Modules.CenterControlButton
            className="fakeDeafen-voicePanel"
            iconComponent={() => (enabled ? DisabledIcon : Icon)}
            isActive={enabled}
            label={`${enabled ? "Unfake" : "Fake"} VC Status`}
            onClick={() => Utils.toggleSoundStatus(enabled)}
            onPopoutClick={onPopoutClick}
            popoutOpen={popoutOpen}
          />
        );
      }}
    </Popout>
  );
};
