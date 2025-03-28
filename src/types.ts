import { types } from "replugged";
import type { Store } from "replugged/dist/renderer/modules/common/flux";
import { ContextMenuProps } from "replugged/dist/renderer/modules/components/ContextMenu";
import type util from "replugged/util";

export namespace Types {
  export import DefaultTypes = types;
  export type MenuProps = ContextMenuProps["ContextMenu"];
  export type UtilTree = util.Tree;
  export type ReactTree = util.Tree & React.ReactElement;
  export interface GenericModule extends Record<string, DefaultTypes.AnyFunction> {}
  export interface WindowStore extends Store {
    isFocused: () => boolean;
    isElementFullScreen: () => boolean;
  }
  export interface AudioResolver {
    exports: Types.DefaultTypes.AnyFunction & { keys: () => string[] };
  }
  export interface Popout
    extends React.ComponentClass<{
      align: string;
      renderPopout: DefaultTypes.AnyFunction;
      children: DefaultTypes.AnyFunction;
      animation?: string;
      autoInvert?: boolean;
      nudgeAlignIntoViewport?: boolean;
      position?: string;
      positionKey?: string;
      spacing?: number;
    }> {
    Animation: {
      FADE: string;
      NONE: string;
      SCALE: string;
      TRANSLATE: string;
    };

    defaultProps: {
      animation: string;
      autoInvert: boolean;
      nudgeAlignIntoViewport: boolean;
      position: string;
      positionKey?: string;
      spacing: number;
    };
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
  export interface IdleHandler {
    usePreventIdle: (e: string) => {
      preventIdle: () => void;
      allowIdle: () => void;
    };
    default: DefaultTypes.AnyFunction;
  }
  export type PanelButton = React.ComponentClass<{
    onContextMenu?: (event: React.MouseEvent) => void;
    icon?: () => React.ReactNode;
    tooltipText?: string;
    onClick?: () => void;
  }>;
  export type CenterControlButton = React.ComponentType<{
    className: string;
    iconComponent: () => React.ReactElement;

    isActive: boolean;
    label: string;
    onClick: DefaultTypes.AnyFunction;
    onPopoutClick: DefaultTypes.AnyFunction;
    popoutOpen: boolean;
  }>;
  export interface CenterControlTray {
    GoLiveButton: DefaultTypes.AnyFunction;
    default: DefaultTypes.AnyFunction;
    handleToggleVideo: DefaultTypes.AnyFunction;
  }
  export type ProfileItem = React.ComponentType<{
    label: string;
    id: string;
    icon: () => React.ReactElement;
    onClick: () => void;
    renderSubmenu?: ({ closePopout }: { closePopout: () => void }) => React.ReactElement;
  }>;
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
  export enum OpCode {
    CALL_CONNECT = 13,
    DISPATCH = 0,
    EMBEDDED_ACTIVITY_CLOSE = 26,
    EMBEDDED_ACTIVITY_LAUNCH = 25,
    EMBEDDED_ACTIVITY_UPDATE = 27,
    GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH = 30,
    GUILD_SUBSCRIPTIONS = 14,
    GUILD_SUBSCRIPTIONS_BULK = 37,
    HEARTBEAT = 1,
    HEARTBEAT_ACK = 11,
    HELLO = 10,
    IDENTIFY = 2,
    INVALID_SESSION = 9,
    PRESENCE_UPDATE = 3,
    RECONNECT = 7,
    REMOTE_COMMAND = 29,
    REQUEST_CHANNEL_STATUSES = 36,
    REQUEST_FORUM_UNREADS = 28,
    REQUEST_GUILD_APPLICATION_COMMANDS = 24,
    REQUEST_GUILD_MEMBERS = 8,
    REQUEST_LAST_MESSAGES = 34,
    REQUEST_SOUNDBOARD_SOUNDS = 31,
    RESUME = 6,
    SEARCH_RECENT_MEMBERS = 35,
    SPEED_TEST_CREATE = 32,
    SPEED_TEST_DELETE = 33,
    STREAM_CREATE = 18,
    STREAM_DELETE = 19,
    STREAM_PING = 21,
    STREAM_SET_PAUSED = 22,
    STREAM_WATCH = 20,
    VOICE_SERVER_PING = 5,
    VOICE_STATE_UPDATE = 4,
  }
  export interface GatewayConnection {
    Opcode: typeof OpCode;
    default: DefaultTypes.AnyFunction;
  }
  export interface Modules {
    loadModules?: () => Promise<void>;
    WindowStore?: WindowStore;
    SoundUtilsModule?: GenericModule;
    SoundUtils?: SoundUtils;
    KeybindUtilsModule?: GenericModule;
    KeybindUtils?: KeybindUtils;
    GatewayConnectionStore?: GatewayConnectionStore;
    GatewayConnection?: GatewayConnection;
    MediaEngineStore?: MediaEngineStore;
    CenterControlTray?: CenterControlTray;
    CenterControlButton?: CenterControlButton;
    IdleHandlerModule?: GenericModule;
    IdleHandler?: IdleHandler;
    PanelButton?: PanelButton;
    AudioResolverPromise?: Promise<AudioResolver>;
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

  export type NestedType<T, P> = P extends
    | `${infer Left}.${infer Right}`
    | `${infer Left}/${infer Right}`
    | `${infer Left}-${infer Right}`
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
    centerTray: boolean;
    playAudio: boolean;
    showToast: boolean;
    keybind: number[][];
  }
}
export default Types;

declare global {
  export const DiscordNative: {
    isRenderer: boolean;
    nativeModules: {
      ensureModule: (
        name:
          | "discord_desktop_core"
          | "discord_erlpack"
          | "discord_game_utils"
          | "discord_krisp"
          | "discord_rpc"
          | "discord_spellcheck"
          | "discord_utils"
          | "discord_voice"
          | "discord_zstd",
      ) => Promise<undefined>;
      requireModule: (name: "discord_utils") => {
        inputEventRegister: (
          id: number,
          keyCode: number[][],
          cb: () => void,
          /**
           * Represents the state of input focus and key events.
           *
           * - `focused` is `true` by default if neither `focused` nor `blurred` is explicitly set or set to `false`.
           * - `keydown` is `true` by default if neither `keydown` nor `keyup` is explicitly set or set to `false`.
           *
           */
          options?: Partial<{ focused?: true; blurred?: true; keyup?: true; keydown?: true }>,
        ) => void;
        inputEventUnregister: (id: number) => void;
      };
    };
  };
}
