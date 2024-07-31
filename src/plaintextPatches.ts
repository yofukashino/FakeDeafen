import Types from "./types";

export default [
  {
    find: "isCopiedStreakGodlike",
    replacements: [
      {
        match: /className:\w+\.buttons,children:\[/,
        replace: (prefix: string) =>
          `${prefix}replugged.plugins.getExports("dev.tharki.FakeDeafen")?._addPanelButton?.(),`,
      },
    ],
  },
  {
    find: ".Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,",
    replacements: [
      {
        match: /null==\w+\?void 0:\w+\.selfDeaf/,
        replace: (prefix: string) =>
          `${prefix}&&replugged.webpack.getByStoreName("MediaEngineStore")?.isDeaf?.()`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
