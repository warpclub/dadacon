import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

// export const priceAtom = atom(10)
export const user = atomWithStorage('user', {})
export const token = atomWithStorage('token', '')