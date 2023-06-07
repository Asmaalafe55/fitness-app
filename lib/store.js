import { atom, selector } from 'recoil'

export const userDataAtom = atom({
  key: 'userData',
  default: {}
})

export const toggleState = atom({ key: 'Toggle', default: false })

export const toggleMenuState = atom({ key: 'Toggle', default: false })

export const darkState = atom({ key: 'Dark', default: false })
