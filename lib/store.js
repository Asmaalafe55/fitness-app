import { atom, selector } from 'recoil'

export const userDataAtom = atom({
  key: 'userData',
  default: {}
})

export const toggleState = atom({ key: 'toggle', default: false })

export const toggleMenuState = atom({ key: 'menuToggle', default: false })

export const darkState = atom({ key: 'dark', default: false })
