import * as Types from "./types";

export default [
  {
    find: "isCopiedStreakGodlike",
    replacements: [
      {
        match: /([\w+]\.[\w+]\([\w+],\{default:\(\)=>[\w+]+)(\}\))/,
        replace: `$1,AccountDetails: () => accountDetails$2`,
      },
      {
        match: /var ([\w\d!@#$%^&*)(+=._-]+)=(function.*\}.*\);.*hoveringOnMute:!1)/,
        replace: `var $1,accountDetails;$1=accountDetails=$2`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
