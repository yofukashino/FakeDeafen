import { types as DefaultTypes } from "replugged";
export { types as DefaultTypes } from "replugged";
import { ReactElement } from "react";
export { ReactElement, ComponentClass } from "react";
export interface WindowInfoStore {
  isFocused: () => boolean;
  addChangeListener: (callback: DefaultTypes.AnyFunction) => void;
  removeChangeListener: (callback: DefaultTypes.AnyFunction) => void;
  isElementFullScreen: () => boolean;
}
export interface Socket {
  analytics: object;
  compressionHandler: object;
  connectionStartTime: number;
  connectionState: string;
  didForceClearGuildHashes: boolean;
  dispatchExceptionBackoff: object;
  dispatchSuccessTimer: number;
  expeditedHeartbeatTimeout: null | number;
  gatewayBackoff: object;
  handleIdentify: DefaultTypes.AnyFunction;
  hasConnectedOnce: boolean;
  heartbeatAck: boolean;
  heartbeatInterval: number;
  heartbeater: number;
  helloTimeout: null | number;
  identifyCompressedByteSize: number;
  identifyStartTime: number;
  identifyUncompressedByteSize: number;
  initialHeartbeatTimeout: null | number;
  isDeferringDispatches: boolean;
  isFastConnect: boolean;
  lastHeartbeatAckTime: number;
  nextReconnectIsImmediate: boolean;
  queuedDispatches: [];
  resumeAnalytics: object;
  resumeUrl: string;
  send: DefaultTypes.AnyFunction;
  voiceStateUpdate: DefaultTypes.AnyFunction;
  seq: number;
  sessionId: string;
  token: string;
  webSocket: object;
  _events: object;
  _eventsCount: number;
  _maxListeners: undefined | number;
}
export interface GatewayConnectionStore {
  getSocket: () => Socket;
  initialize: DefaultTypes.AnyFunction;
  isConnected: DefaultTypes.AnyFunction;
  isConnectedOrOverlay: DefaultTypes.AnyFunction;
  isTryingToConnect: DefaultTypes.AnyFunction;
  lastTimeConnectedChanged: DefaultTypes.AnyFunction;
}
export interface voiceStateUpdateArgs {
  channelId: string;
  guildId: string;
  preferredRegion: string;
  selfDeaf: boolean;
  selfMute: boolean;
  selfVideo: boolean;
}
export interface MediaEngineActions {
  enable: DefaultTypes.AnyFunction;
  enableSoundshare: DefaultTypes.AnyFunction;
  interact: DefaultTypes.AnyFunction;
  reset: DefaultTypes.AnyFunction;
  setAV1Enabled: DefaultTypes.AnyFunction;
  setAecDump: DefaultTypes.AnyFunction;
  setAttenuation: DefaultTypes.AnyFunction;
  setAudioSubsystem: DefaultTypes.AnyFunction;
  setAutomaticGainControl: DefaultTypes.AnyFunction;
  setDebugLogging: DefaultTypes.AnyFunction;
  setDesktopSource: DefaultTypes.AnyFunction;
  setDisableLocalVideo: DefaultTypes.AnyFunction;
  setEchoCancellation: DefaultTypes.AnyFunction;
  setExperimentalEncoders: DefaultTypes.AnyFunction;
  setExperimentalSoundshare: DefaultTypes.AnyFunction;
  setHardwareH264: DefaultTypes.AnyFunction;
  setInputDevice: DefaultTypes.AnyFunction;
  setInputVolume: DefaultTypes.AnyFunction;
  setLocalPan: DefaultTypes.AnyFunction;
  setLocalVolume: DefaultTypes.AnyFunction;
  setLoopback: DefaultTypes.AnyFunction;
  setMode: DefaultTypes.AnyFunction;
  setNoiseCancellation: DefaultTypes.AnyFunction;
  setNoiseSuppression: DefaultTypes.AnyFunction;
  setOpenH264: DefaultTypes.AnyFunction;
  setOutputDevice: DefaultTypes.AnyFunction;
  setOutputVolume: DefaultTypes.AnyFunction;
  setQoS: DefaultTypes.AnyFunction;
  setSilenceWarning: DefaultTypes.AnyFunction;
  setTemporarySelfMute: DefaultTypes.AnyFunction;
  setVideoDevice: DefaultTypes.AnyFunction;
  setVideoEnabled: DefaultTypes.AnyFunction;
  setVideoHook: DefaultTypes.AnyFunction;
  toggleLocalMute: DefaultTypes.AnyFunction;
  toggleSelfDeaf: DefaultTypes.AnyFunction;
  toggleSelfMute: DefaultTypes.AnyFunction;
}
export interface NotificationVars {
  initialState: {
    desktopType: string;
    disableAllSounds: boolean;
    disableUnreadBadge: boolean;
    disabledSounds: string[];
    notifyMessagesInSelectedChannel: boolean;
    taskbarFlash: boolean;
    ttsType: string;
  };
  state: {
    desktopType: string;
    disableAllSounds: boolean;
    disableUnreadBadge: boolean;
    disabledSounds: string[];
    notifyMessagesInSelectedChannel: boolean;
    taskbarFlash: boolean;
    ttsType: string;
  };
}
export interface NotificationSettingsStore {
  getDesktopType: DefaultTypes.AnyFunction;
  getDisableAllSounds: DefaultTypes.AnyFunction;
  getDisableUnreadBadge: DefaultTypes.AnyFunction;
  getDisabledSounds: DefaultTypes.AnyFunction;
  getNotifyMessagesInSelectedChannel: DefaultTypes.AnyFunction;
  getTTSType: DefaultTypes.AnyFunction;
  getUserAgnosticState: DefaultTypes.AnyFunction;
  initialize: DefaultTypes.AnyFunction;
  isSoundDisabled: (sound: string) => boolean;
  __getLocalVars: () => NotificationVars;
  taskbarFlash: boolean;
}
export interface MenuArgs
  extends Array<{
    navId: string;
    children: [ReactElement];
  }> {}
export interface KeybindEvent {
  type: string;
  altKey: boolean;
  ctrlKey: boolean;
  keyCode: number;
  metaKey: boolean;
  shiftKey: boolean;
}
export interface CurrentlyPressed {
  [key: number]: KeybindEvent;
}
export interface KeybindEvents extends Array<KeybindEvent> {}

export interface AccountDetailsClasses {
  accountProfilePopoutWrapper: string;
  avatar: string;
  avatarWrapper: string;
  buildOverrideButton: string;
  canCopy: string;
  container: string;
  copySuccess: string;
  customStatus: string;
  emoji: string;
  godlike: string;
  hasBuildOverride: string;
  nameTag: string;
  panelSubtextContainer: string;
  panelTitleContainer: string;
  redIcon: string;
  statusTooltip: string;
  strikethrough: string;
  usernameContainer: string;
  withTagAsButton: string;
  withTagless: string;
}
export interface AccountDetails {
  AccountDetails: DefaultTypes.AnyFunction;
}
export interface GenericModule {
  [key: string]: DefaultTypes.AnyFunction;
}
export interface SwitchItemUtil {
  value: boolean;
  onChange: (newValue: boolean) => void;
}
export interface ContextMenuArgs {
  className: string;
  config: { context: string };
  context: string;
  onHeightUpdate: DefaultTypes.AnyFunction;
  position: null | number;
  target: HTMLElement;
  theme: string;
}
export interface ExtendedContextMenuArgs extends ContextMenuArgs {
  onClose: DefaultTypes.AnyFunction;
}
export interface ContextMenu {
  close: DefaultTypes.AnyFunction;
  open: (
    event: React.UIEvent,
    render?: ContextMenu,
    options?: { enableSpellCheck?: boolean },
    renderLazy?: Promise<ContextMenu>,
  ) => void;
  openLazy: (
    event: React.UIEvent,
    renderLazy?: Promise<ContextMenu>,
    options?: { enableSpellCheck?: boolean },
  ) => void;
}
export interface CloseButtonProps {
  size?: string;
  className?: string;
  onClick?: () => void;
}
export interface KeybindRecorderItemProps {
  title?: string;
  note?: string;
  size?: string;
  className?: string;
  value?: unknown;
  onChange?: (value: unknown) => void;
  disabled?: boolean;
  clearable?: boolean;
}
export interface StatusPickerClasses {
  description: string;
  divider: string;
  icon: string;
  mainStatusIcon: string;
  menu: string;
  menuItemFocused: string;
  menuItemFocusedPremium: string;
  modal: string;
  status: string;
  statusItem: string;
  statusPickerModalMenu: string;
}

export interface Settings {
  enabled: boolean;
  soundStatus: {
    mute: boolean;
    deaf: boolean;
    video: boolean;
  };
  statusPicker: boolean;
  userPanel: boolean;
  playAudio: boolean;
  showToast: boolean;
  keybind: unknown[];
}
