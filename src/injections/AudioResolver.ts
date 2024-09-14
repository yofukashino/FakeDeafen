import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import { Sounds } from "../lib/consts";

export default async (): Promise<void> => {
  const AudioResolver = await Modules.AudioResolverPromise;
  PluginInjector.instead(AudioResolver, "exports", ([sound]: [string], res) => {
    switch (sound) {
      case `./${Sounds.Enable}.mp3`: {
        return Sounds.EnableURL;
      }
      case `./${Sounds.Disable}.mp3`: {
        return Sounds.DisableURL;
      }
      default:
        if (AudioResolver.exports.keys().includes(sound)) {
          return res(sound);
        }
    }
  });
};
