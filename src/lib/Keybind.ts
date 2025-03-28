/**
 * Add listener for keyboard events.
 *
 * @example
 * ```
 *
 *
 * const listener = new KeybindListeners();
 *
 * export function start() {
 *  listener.addListener([[0,0]], () => {
 *   console.log("Pressed.");
 * })
 *   )
 * }
 *
 * export function stop() {
 *   injector.uninjectAll();
 * }
 * ```
 */

export default class Listeners {
  #discordUtils = DiscordNative.nativeModules.requireModule("discord_utils");
  #unlisteners = new Set<() => void>();

  /**
   * A utility function to add listener for keyboard events.
   * @param keyCode The key combination's native keycode.
   * @param cb The function to execute upon key event.
   * @param options — What specific Keybind event.
   * @returns A callback to de-register the function
   *
   * @example
   * ```
   *
   * const listener = new KeybindListeners();
   *
   * export function start() {
   *  listener.addListener([[0,0]], () => {
   *   console.log("Pressed.");
   * })
   *   )
   * }
   *
   * export function stop() {
   *   injector.uninjectAll();
   * }
   * ```
   */
  public addListener(
    keyCode: number[][],
    cb: () => void,
    /**
     * Represents the state of input focus and key events.
     *
     * - `focused` is `true` by default if neither `focused` nor `blurred` is explicitly set or set to `false`.
     * - `keydown` is `true` by default if neither `keydown` nor `keyup` is explicitly set or set to `false`.
     *
     */
    options?: Partial<{ focused?: true; blurred?: true; keyup?: true; keydown?: true }>,
  ): () => void {
    const Id = Date.now();
    this.#discordUtils.inputEventRegister(Id, keyCode, cb, options ?? {});
    const unregister = (): void => this.#discordUtils.inputEventUnregister(Id);
    this.#unlisteners.add(unregister);
    return unregister;
  }

  /**
   * Remove all injections made by this injector
   */
  public unlistenAll(): void {
    for (const unlistener of this.#unlisteners) {
      if (typeof unlistener === "function") {
        unlistener();
        this.#unlisteners.delete(unlistener);
      }
    }
  }
}
