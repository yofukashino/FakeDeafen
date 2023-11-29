import { PluginInjector } from "../index";
import { AudioResolver } from "../lib/requiredModules";
import { Sounds } from "../lib/consts";

export default (): void => {
  PluginInjector.instead(AudioResolver, "exports", ([sound]: [string], res) => {
    console.log(sound);
    switch (sound) {
      case `./${Sounds.Enable}.mp3`: {
        return Sounds.EnableURL;
      }
      case `./${Sounds.Disable}.mp3`: {
        return Sounds.DisableURL;
      }
      default: {
        return res(sound);
      }
    }
  });
};
