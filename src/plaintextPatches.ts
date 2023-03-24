import * as Types from "./types";

export default [
  {
    find: "isCopiedStreakGodlike",
    replacements: [
      {
        match: /([\w$]+\.[\w$]+\([\w$]+,\{default:\(\)=>[\w$]+)(\}\))/,
        replace: `$1,AccountDetails: () => accountDetails$2`,
      },
      {
        match: /([^]*)var ([\w$]+)=(function[^]*?hoveringOnMute:!1};)/,
        replace: `$1var $2,accountDetails;$2=accountDetails=$3`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
