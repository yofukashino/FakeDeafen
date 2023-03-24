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
        match:
          /(?=[^]*var [\w$]+,accountDetails;[\w$]+=accountDetails=function[^]*?hoveringOnMute:!1};)|([^]*)var ([\w$]+)=(function[^]*?hoveringOnMute:!1};)/,
        replace: (_: string, prefix: string, varName: string, suffix: string) => {
          if (!prefix || !varName || !suffix) return `${_}`;
          return `${prefix}var ${varName},accountDetails;${varName}=accountDetails=${suffix}`;
        },
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
