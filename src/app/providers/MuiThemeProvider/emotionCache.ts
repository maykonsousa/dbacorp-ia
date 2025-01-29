// src/utils/emotionCache.ts
import createCache from "@emotion/cache";

const isBrowser = typeof document !== "undefined";

export  function createEmotionCache() {
  return createCache({ key: "mui", prepend: true });
}

export const clientSideEmotionCache = isBrowser ? createEmotionCache() : null;
