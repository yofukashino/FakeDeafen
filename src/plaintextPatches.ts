import Types from "./types";

export default [
  {
    find: "AccountProfilePopout",
    replacements: [
      {
        match: /\(0,\w+\.jsx\)\((\w+\.\w+),{id:"switch-accounts/,
        replace: (suffix: string, ProfileItem: string) =>
          `replugged.plugins.getExports("dev.tharki.FakeDeafen")?._addProfileItem?.({ProfileItem: ${ProfileItem}}),${suffix}`,
      },
    ],
  },
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
