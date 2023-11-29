import Types from "./types";

export default [
  {
    find: "isCopiedStreakGodlike",
    replacements: [
      {
        match: /this\.renderNameZone\(\),\(0,.\.\w+\)\([\w_$]+.\w+,{grow:0,children:\[/,
        replace: `$&replugged.plugins.getExports("dev.tharki.FakeDeafen")?._addPanelButton?.()??null,`,
      },
    ],
  },
  {
    find: ".Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,",
    replacements: [
      {
        match: /null==\w+\?void 0:\w+\.selfDeaf/,
        replace: `$&&&replugged.webpack.getByStoreName("MediaEngineStore").isDeaf()`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
