import React from 'react'
import Link from 'next/link'
import { useSetRecoilState, useRecoilState } from 'recoil'
import { toggleState, darkState } from '../../lib/store'

import { FiSun, FiMoon } from 'react-icons/fi'

import style from './AuthMenu.module.scss'

const AuthMenu = () => {
  const setToggle = useSetRecoilState(toggleState)
  const [dark, setDark] = useRecoilState(darkState)

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
            <Link href="/auth/login" onClick={() => setToggle(false)}>
              Sign In
            </Link>
          </li>
          <li>
            <Link href="/auth/register" onClick={() => setToggle(false)}>
              Sign Up
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

export default AuthMenu
