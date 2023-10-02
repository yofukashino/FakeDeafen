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
export interface ElectronModule {
  architecture: string;
  asyncify: DefaultTypes.AnyFunction;
  beforeUnload: DefaultTypes.AnyFunction;
  blockDisplaySleep: DefaultTypes.AnyFunction;
  blur: DefaultTypes.AnyFunction;
  bounceDock: DefaultTypes.AnyFunction;
  buildNumber: DefaultTypes.AnyFunction;
  canBootstrapNewUpdater: DefaultTypes.AnyFunction;
  canCopyImage: DefaultTypes.AnyFunction;
  cleanupDisplaySleep: DefaultTypes.AnyFunction;
  clearCandidateGamesCallback: DefaultTypes.AnyFunction;
  close: DefaultTypes.AnyFunction;
  copy: DefaultTypes.AnyFunction;
  copyImage: DefaultTypes.AnyFunction;
  crash: DefaultTypes.AnyFunction;
  cut: DefaultTypes.AnyFunction;
  detectPid: DefaultTypes.AnyFunction;
  ensureModule: DefaultTypes.AnyFunction;
  flashFrame: DefaultTypes.AnyFunction;
  flushCookies: DefaultTypes.AnyFunction;
  flushDNSCache: DefaultTypes.AnyFunction;
  flushStorageData: DefaultTypes.AnyFunction;
  focus: DefaultTypes.AnyFunction;
  fullscreen: DefaultTypes.AnyFunction;
  generateSessionFromPid: DefaultTypes.AnyFunction;
  getAudioPid: DefaultTypes.AnyFunction;
  getCloudSync: DefaultTypes.AnyFunction;
  getCrashReporterMetadata: DefaultTypes.AnyFunction;
  getDesktopSourceFromPid: DefaultTypes.AnyFunction;
  getDiscordMemoryUsage: DefaultTypes.AnyFunction;
  getDiscordUtils: () => {
    beforeUnload: DefaultTypes.AnyFunction;
    clearCandidateGamesCallback: DefaultTypes.AnyFunction;
    crash: DefaultTypes.AnyFunction;
    gameDisplayModeIsSupported: DefaultTypes.AnyFunction;
    gameDisplayModeUpdate: DefaultTypes.AnyFunction;
    generateSessionFromPid: DefaultTypes.AnyFunction;
    getAudioPid: DefaultTypes.AnyFunction;
    getDiscordMemoryUsage: DefaultTypes.AnyFunction;
    getGPUDriverVersions: DefaultTypes.AnyFunction;
    getPidFromWindowHandle: DefaultTypes.AnyFunction;
    getWindowFullscreenTypeByPid: DefaultTypes.AnyFunction;
    getWindowHandleFromPid: DefaultTypes.AnyFunction;
    initializeExitHook: DefaultTypes.AnyFunction;
    inputCaptureRegisterElement: DefaultTypes.AnyFunction;
    inputEventRegister: DefaultTypes.AnyFunction;
    inputEventUnregister: DefaultTypes.AnyFunction;
    inputGetRegisteredEvents: DefaultTypes.AnyFunction;
    inputSetFocused: DefaultTypes.AnyFunction;
    isSystemDarkMode: DefaultTypes.AnyFunction;
    nativePermissionOpenSettings: DefaultTypes.AnyFunction;
    nativePermssionHasAuthorization: DefaultTypes.AnyFunction;
    nativePermssionRequestAuthorization: DefaultTypes.AnyFunction;
    notifyGameLaunched: DefaultTypes.AnyFunction;
    setCandidateGamesCallback: DefaultTypes.AnyFunction;
    setForegroundProcess: DefaultTypes.AnyFunction;
    setGameCandidateOverrides: DefaultTypes.AnyFunction;
    setObservedGamesCallback: DefaultTypes.AnyFunction;
    setProcessPriority: DefaultTypes.AnyFunction;
    shouldDisplayNotifications: DefaultTypes.AnyFunction;
    submitLiveCrashReport: DefaultTypes.AnyFunction;
    _generateLiveMinidump: DefaultTypes.AnyFunction;
  };
  getDispatch: DefaultTypes.AnyFunction;
  getEnableHardwareAcceleration: DefaultTypes.AnyFunction;
  getGPUDriverVersions: DefaultTypes.AnyFunction;
  getGameUtils: DefaultTypes.AnyFunction;
  getIdleMilliseconds: DefaultTypes.AnyFunction;
  getPidFromDesktopSource: DefaultTypes.AnyFunction;
  getSetting: DefaultTypes.AnyFunction;
  getVoiceEngine: DefaultTypes.AnyFunction;
  inputEventRegister: DefaultTypes.AnyFunction;
  inputEventUnregister: DefaultTypes.AnyFunction;
  invoke: DefaultTypes.AnyFunction;
  isAlwaysOnTop: DefaultTypes.AnyFunction;
  isSystemDarkMode: DefaultTypes.AnyFunction;
  makeChunkedRequest: DefaultTypes.AnyFunction;
  maximize: DefaultTypes.AnyFunction;
  minimize: DefaultTypes.AnyFunction;
  moduleVersions: DefaultTypes.AnyFunction;
  on: DefaultTypes.AnyFunction;
  paste: DefaultTypes.AnyFunction;
  purgeMemory: DefaultTypes.AnyFunction;
  readClipboard: DefaultTypes.AnyFunction;
  relaunch: DefaultTypes.AnyFunction;
  releaseChannel: DefaultTypes.AnyFunction;
  requireModule: DefaultTypes.AnyFunction;
  restore: DefaultTypes.AnyFunction;
  saveFile: DefaultTypes.AnyFunction;
  saveImage: DefaultTypes.AnyFunction;
  send: DefaultTypes.AnyFunction;
  setAlwaysOnTop: DefaultTypes.AnyFunction;
  setApplicationBackgroundColor: DefaultTypes.AnyFunction;
  setBackgroundThrottling: DefaultTypes.AnyFunction;
  setBadge: DefaultTypes.AnyFunction;
  setCandidateGamesCallback: DefaultTypes.AnyFunction;
  setCrashInformation: DefaultTypes.AnyFunction;
  setEnableHardwareAcceleration: DefaultTypes.AnyFunction;
  setFocused: DefaultTypes.AnyFunction;
  setForegroundProcess: DefaultTypes.AnyFunction;
  setGameCandidateOverrides: DefaultTypes.AnyFunction;
  setObservedGamesCallback: DefaultTypes.AnyFunction;
  setOnInputEventCallback: DefaultTypes.AnyFunction;
  setSystemTrayApplications: DefaultTypes.AnyFunction;
  setSystemTrayIcon: DefaultTypes.AnyFunction;
  setThumbarButtons: DefaultTypes.AnyFunction;
  setZoomFactor: DefaultTypes.AnyFunction;
  shouldDisplayNotifications: DefaultTypes.AnyFunction;
  showOpenDialog: DefaultTypes.AnyFunction;
  submitLiveCrashReport: DefaultTypes.AnyFunction;
  supportsFeature: DefaultTypes.AnyFunction;
  unblockDisplaySleep: DefaultTypes.AnyFunction;
  undetectPid: DefaultTypes.AnyFunction;
  updateCrashReporter: DefaultTypes.AnyFunction;
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
export interface NotificationSettingsStore extends Store {
  getDesktopType: DefaultTypes.AnyFunction;
  getDisableAllSounds: DefaultTypes.AnyFunction;
  getDisableUnreadBadge: DefaultTypes.AnyFunction;
  getDisabledSounds: DefaultTypes.AnyFunction;
  getNotifyMessagesInSelectedChannel: DefaultTypes.AnyFunction;
  getTTSType: DefaultTypes.AnyFunction;
  getUserAgnosticState: DefaultTypes.AnyFunction;
  initialize: DefaultTypes.AnyFunction;
  isSoundDisabled: (sound: string) => boolean;
  taskbarFlash: boolean;
}
export interface KeybindUtils {
  toCombo: DefaultTypes.AnyFunction;
  toEvent: DefaultTypes.AnyFunction;
}
export interface SoundUtils {
  createSound: DefaultTypes.AnyFunction;
  createSoundpackSound: DefaultTypes.AnyFunction;
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
