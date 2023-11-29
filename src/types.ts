import { types as DefaultTypes } from "replugged";
import type { Store } from "replugged/dist/renderer/modules/common/flux";
export { types as DefaultTypes } from "replugged";
export interface GenericModule extends Record<string, DefaultTypes.AnyFunction> {}
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
export interface GatewayConnectionStore extends Store {
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
export interface MediaEngineStore extends Store {
  getAecDump: DefaultTypes.AnyFunction;
  getAttenuateWhileSpeakingOthers: DefaultTypes.AnyFunction;
  getAttenuateWhileSpeakingSelf: DefaultTypes.AnyFunction;
  getAttenuation: DefaultTypes.AnyFunction;
  getAudioSubsystem: DefaultTypes.AnyFunction;
  getAutomaticGainControl: DefaultTypes.AnyFunction;
  getAv1Enabled: DefaultTypes.AnyFunction;
  getCameraComponent: DefaultTypes.AnyFunction;
  getDebugLogging: DefaultTypes.AnyFunction;
  getEchoCancellation: DefaultTypes.AnyFunction;
  getEnableSilenceWarning: DefaultTypes.AnyFunction;
  getEverSpeakingWhileMuted: DefaultTypes.AnyFunction;
  getExperimentalEncoders: DefaultTypes.AnyFunction;
  getExperimentalSoundshare: DefaultTypes.AnyFunction;
  getGoLiveContext: DefaultTypes.AnyFunction;
  getGoLiveSource: DefaultTypes.AnyFunction;
  getH265Enabled: DefaultTypes.AnyFunction;
  getHardwareH264: DefaultTypes.AnyFunction;
  getInputDetected: DefaultTypes.AnyFunction;
  getInputDeviceId: DefaultTypes.AnyFunction;
  getInputDevices: DefaultTypes.AnyFunction;
  getInputVolume: DefaultTypes.AnyFunction;
  getLocalPan: DefaultTypes.AnyFunction;
  getLocalVolume: DefaultTypes.AnyFunction;
  getLoopback: DefaultTypes.AnyFunction;
  getMediaEngine: DefaultTypes.AnyFunction;
  getMode: DefaultTypes.AnyFunction;
  getModeOptions: DefaultTypes.AnyFunction;
  getNoInputDetectedNotice: DefaultTypes.AnyFunction;
  getNoiseCancellation: DefaultTypes.AnyFunction;
  getNoiseSuppression: DefaultTypes.AnyFunction;
  getOpenH264: DefaultTypes.AnyFunction;
  getOutputDeviceId: DefaultTypes.AnyFunction;
  getOutputDevices: DefaultTypes.AnyFunction;
  getOutputVolume: DefaultTypes.AnyFunction;
  getPacketDelay: DefaultTypes.AnyFunction;
  getQoS: DefaultTypes.AnyFunction;
  getSettings: DefaultTypes.AnyFunction;
  getShortcuts: DefaultTypes.AnyFunction;
  getSoundshareEnabled: DefaultTypes.AnyFunction;
  getState: DefaultTypes.AnyFunction;
  getSupportedSecureFramesProtocolVersion: DefaultTypes.AnyFunction;
  getVideoComponent: DefaultTypes.AnyFunction;
  getVideoDeviceId: DefaultTypes.AnyFunction;
  getVideoDevices: DefaultTypes.AnyFunction;
  getVideoHook: DefaultTypes.AnyFunction;
  getVideoStreamParameters: DefaultTypes.AnyFunction;
  getVideoToggleState: DefaultTypes.AnyFunction;
  hasContext: DefaultTypes.AnyFunction;
  initialize: DefaultTypes.AnyFunction;
  isAdvancedVoiceActivitySupported: DefaultTypes.AnyFunction;
  isAecDumpSupported: DefaultTypes.AnyFunction;
  isAnyLocalVideoAutoDisabled: DefaultTypes.AnyFunction;
  isAutomaticGainControlSupported: DefaultTypes.AnyFunction;
  isDeaf: DefaultTypes.AnyFunction;
  isEnabled: DefaultTypes.AnyFunction;
  isExperimentalEncodersSupported: DefaultTypes.AnyFunction;
  isHardwareMute: DefaultTypes.AnyFunction;
  isInteractionRequired: DefaultTypes.AnyFunction;
  isLocalMute: DefaultTypes.AnyFunction;
  isLocalVideoAutoDisabled: DefaultTypes.AnyFunction;
  isLocalVideoDisabled: DefaultTypes.AnyFunction;
  isMediaFilterSettingLoading: DefaultTypes.AnyFunction;
  isMute: DefaultTypes.AnyFunction;
  isNativeAudioPermissionReady: DefaultTypes.AnyFunction;
  isNoiseCancellationError: DefaultTypes.AnyFunction;
  isNoiseCancellationSupported: DefaultTypes.AnyFunction;
  isNoiseSuppressionSupported: DefaultTypes.AnyFunction;
  isScreenSharing: DefaultTypes.AnyFunction;
  isSelfDeaf: DefaultTypes.AnyFunction;
  isSelfMute: DefaultTypes.AnyFunction;
  isSelfMutedTemporarily: DefaultTypes.AnyFunction;
  isSimulcastSupported: DefaultTypes.AnyFunction;
  isSoundSharing: DefaultTypes.AnyFunction;
  isSupported: DefaultTypes.AnyFunction;
  isVideoAvailable: DefaultTypes.AnyFunction;
  isVideoEnabled: DefaultTypes.AnyFunction;
  setCanHavePriority: DefaultTypes.AnyFunction;
  supports: DefaultTypes.AnyFunction;
  supportsDisableLocalVideo: DefaultTypes.AnyFunction;
  supportsEnableSoundshare: DefaultTypes.AnyFunction;
  supportsExperimentalSoundshare: DefaultTypes.AnyFunction;
  supportsInApp: DefaultTypes.AnyFunction;
  supportsScreenSoundshare: DefaultTypes.AnyFunction;
  supportsVideoHook: DefaultTypes.AnyFunction;
}

export interface KeybindUtils {
  toCombo: DefaultTypes.AnyFunction;
  toBrowserEvents: DefaultTypes.AnyFunction;
}
export interface SoundUtils {
  createSound: DefaultTypes.AnyFunction;
  createSoundForPack: DefaultTypes.AnyFunction;
  playSound: DefaultTypes.AnyFunction;
}

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
export interface CloseButtonProps {
  size?: string;
  className?: string;
  onClick?: () => void;
}
export interface KeybindEvent {
  type: string;
  altKey: boolean;
  ctrlKey: boolean;
  keyCode: number;
  metaKey: boolean;
  shiftKey: boolean;
}
export interface KeybindRecorderItemProps {
  title?: string;
  note?: string;
  size?: string;
  className?: string;
  value?: number[][];
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

export type Jsonifiable =
  | null
  | undefined
  | boolean
  | number
  | string
  | Jsonifiable[]
  | { [key: string]: Jsonifiable };
export type ValType<T> =
  | T
  | React.ChangeEvent<HTMLInputElement>
  | (Record<string, unknown> & { value?: T; checked?: T });

export type NestedType<T, P> = P extends `${infer Left}.${infer Right}`
  ? Left extends keyof T
    ? NestedType<T[Left], Right>
    : Left extends `${infer FieldKey}[${infer IndexKey}]`
    ? FieldKey extends keyof T
      ? NestedType<Exclude<T[FieldKey], undefined> extends infer U ? U : never, IndexKey>
      : undefined
    : undefined
  : P extends keyof T
  ? T[P]
  : P extends `${infer FieldKey}[${infer _IndexKey}]`
  ? FieldKey extends keyof T
    ? Exclude<T[FieldKey], undefined> extends infer U
      ? U
      : never
    : undefined
  : undefined;

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
  keybind: Array<{
    altKey: boolean;
    code: string;
    ctrlKey: boolean;
    key: string;
    keyCode: number;
    metaKey: boolean;
    shiftKey: boolean;
  }>;
}

export * as default from "./types";
