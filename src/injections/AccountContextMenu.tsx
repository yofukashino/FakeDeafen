import { React } from "replugged/common";
import { ContextMenu } from "replugged/components";
import { PluginInjectorUtils, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Icons from "../Components/Icons";
import Utils from "../lib/utils";
import Types from "../types";

export default (): void => {
  PluginInjectorUtils.addMenuItem(Types.DefaultTypes.ContextMenuTypes.Account, (_data, menu) => {
    if (!SettingValues.get("statusPicker", defaultSettings.statusPicker)) return;
    const [muteValue, muteOnChange] = Utils.useSettingArray(
      SettingValues,
      "soundStatus.mute",
      defaultSettings.soundStatus.mute,
    );
    const [deafValue, deafOnChange] = Utils.useSettingArray(
      SettingValues,
      "soundStatus.deaf",
      defaultSettings.soundStatus.deaf,
    );
    const [videoValue, videoOnChange] = Utils.useSettingArray(
      SettingValues,
      "soundStatus.video",
      defaultSettings.soundStatus.video,
    );
    const [enabled, setEnabled] = React.useState(
      SettingValues.get("enabled", defaultSettings.enabled),
    );
    React.useEffect(() => {
      setEnabled(SettingValues.get("enabled", defaultSettings.enabled));
    }, [SettingValues.get("enabled", defaultSettings.enabled)]);
    const Icon = (
      <Icons.sound
        width="16"
        height="16"
        style={{
          marginLeft: "-2px",
        }}
      />
    );
    const DisabledIcon = (
      <Icons.sound
        width="16"
        height="16"
        style={{
          marginLeft: "-2px",
        }}>
        <polygon
          style={{
            fill: "#a61616",
          }}
          points="22.6,2.7 22.6,2.8 19.3,6.1 16,9.3 16,9.4 15,10.4 15,10.4 10.3,15 2.8,22.5 1.4,21.1 21.2,1.3 "
        />
      </Icons.sound>
    );
    const { children } = menu as { children: React.ReactElement[] };
    const switchAccount = children.find((c) => c?.props?.children?.key === "switch-account");
    if (!children.find((c) => c?.props?.className === "yofukashino"))
      children.splice(
        children.indexOf(switchAccount!),
        0,
        <ContextMenu.MenuGroup className="yofukashino" children={[]} />,
      );
    const section = children.find((c) => c?.props?.className === "yofukashino");
    if (!section) return;
    section.props.children = section.props.children.filter(
      (m: React.ReactElement) => m?.props?.id !== "fake-deafen",
    );
    if (!section.props.children.find((m: React.ReactElement) => m?.props?.id === "fake-deafen"))
      section.props.children.push(
        <ContextMenu.MenuItem
          label={`${enabled ? "Unfake" : "Fake"} VC Status`}
          id="fake-deafen"
          action={() => Utils.toggleSoundStatus(enabled)}
          icon={() => (enabled ? DisabledIcon : Icon)}
          showIconFirst={true}>
          <ContextMenu.MenuGroup label="What to fake?">
            <ContextMenu.MenuSeparator />
            <ContextMenu.MenuCheckboxItem
              id="mute"
              label="Mute"
              checked={muteValue}
              action={() => muteOnChange(!muteValue)}
            />
            <ContextMenu.MenuCheckboxItem
              id="deafen"
              label="Deafen"
              checked={deafValue}
              action={() => deafOnChange(!deafValue)}
            />
            <ContextMenu.MenuCheckboxItem
              id="video"
              label="Video"
              checked={videoValue}
              action={() => videoOnChange(!videoValue)}
            />
          </ContextMenu.MenuGroup>
        </ContextMenu.MenuItem>,
      );
  });
};
