import { PluginInjector } from "../index";
import { AudioResolverPromise } from "../lib/requiredModules";
import { Sounds } from "../lib/consts";

export default async (): Promise<void> => {
  const AudioResolver = await AudioResolverPromise;
  PluginInjector.instead(AudioResolver, "exports", ([sound]: [string], res) => {
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
