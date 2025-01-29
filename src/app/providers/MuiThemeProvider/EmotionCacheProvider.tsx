// src/providers/EmotionCacheProvider.tsx
"use client";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { ReactNode } from "react";
import  {clientSideEmotionCache } from "./emotionCache";

interface EmotionCacheProviderProps {
  children: ReactNode;
  emotionCache?: EmotionCache | null;
}

export function EmotionCacheProvider({ children, emotionCache = clientSideEmotionCache }: EmotionCacheProviderProps) {
  return <CacheProvider value={emotionCache }>{children}</CacheProvider>;
}
