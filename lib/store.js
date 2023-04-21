import { atom, selector } from 'recoil'

export const userDataAtom = atom({
  key: 'userData',
  default: {}
})

export const toggleState = atom({ key: 'Toggle', default: false })
