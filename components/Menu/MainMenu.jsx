import React from 'react'
import Link from 'next/link'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { toggleMenuState, darkState } from '../../lib/store'

import { FiSun, FiMoon } from 'react-icons/fi'
import { MdOutlineLogout } from 'react-icons/md'

import style from './MainMenu.module.scss'

const MainMenu = () => {
  const setToggle = useSetRecoilState(toggleMenuState)
  const setDark = useSetRecoilState(darkState)
  const dark = useRecoilValue(darkState)

  return (
    <>
      <div className={`${style['list_container']} ${dark ? style.dark : ''}`}>
        <ul className={style.list_links}>
          <li>
            <Link href="/" onClick={() => setToggle(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setToggle(false)}>
              Exercise
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setToggle(false)}>
              Food Plan
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setToggle(false)}>
              Calculators
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setToggle(false)}>
              Notifications
            </Link>
          </li>
          <li>
            <div className={style.line}></div>
          </li>
          <li>
            <MdOutlineLogout />
            <Link href="/" onClick={() => setToggle(false)}>
              Logout
            </Link>
          </li>
        </ul>
        <div>
          <FiMoon
            className={`${style['theme']} ${dark ? style.dark : style.moon}`}
            onClick={() => setDark(true)}
          />
          <FiSun
            className={`${style['theme']} ${!dark ? style.light : style.sun}`}
            onClick={() => setDark(false)}
          />
        </div>
      </div>
    </>
  )
}

export default MainMenu
