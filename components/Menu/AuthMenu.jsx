import React from 'react'
import { useRouter } from 'next/router'
import { useSetRecoilState, useRecoilState } from 'recoil'

import { toggleState, darkState } from '../../lib/store'
import { FiSun, FiMoon } from 'react-icons/fi'
import style from './AuthMenu.module.scss'

function NavLink({ href, children }) {
  const setToggle = useSetRecoilState(toggleState)
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <a
      href={href}
      onClick={() => setToggle(false)}
      className={isActive ? style.activeLink : style.unActiveLink}
    >
      {children}
    </a>
  )
}

const AuthMenu = () => {
  const [dark, setDark] = useRecoilState(darkState)

  return (
    <>
      <div className={`${style['list_container']} ${dark ? style.dark : ''}`}>
        <ul className={style.list_links}>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/auth/login">Sign In</NavLink>
          </li>
          <li>
            <NavLink href="/auth/register"> Sign Up</NavLink>
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
