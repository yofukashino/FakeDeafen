import Types from "./types";

export default [
  {
    find: "isCopiedStreakGodlike",
    replacements: [
      {
        match: /this\.renderNameZone\(\),\(0,.\.\w+\)\(.+?\.\w+,{grow:0,children:\[/,
        replace: (suffix: string) =>
          `${suffix}replugged.plugins.getExports("dev.tharki.FakeDeafen")?._addPanelButton?.()??null,`,
      },
    ],
  },
  {
    find: ".Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,",
    replacements: [
      {
        match: /null==\w+\?void 0:\w+\.selfDeaf/,
        replace: (suffix: string) =>
          `${suffix}&&replugged.webpack.getByStoreName("MediaEngineStore")?.isDeaf?.()`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
