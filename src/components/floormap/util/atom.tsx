import { atom } from 'jotai'
import type { ScaleSize } from "~/types/floor";

export const ScaleAtom = atom<ScaleSize>("default");
