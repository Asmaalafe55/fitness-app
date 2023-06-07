import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSetRecoilState, useRecoilValue } from 'recoil'

import { toggleMenuState, darkState } from '../../lib/store'
import { FiSun, FiMoon } from 'react-icons/fi'
import { MdOutlineLogout } from 'react-icons/md'

import style from './MainMenu.module.scss'

function NavLink({ href, children }) {
  const setToggle = useSetRecoilState(toggleMenuState)
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

const MainMenu = () => {
  const setToggle = useSetRecoilState(toggleMenuState)
  const setDark = useSetRecoilState(darkState)
  const dark = useRecoilValue(darkState)

  return (
    <>
      <div className={`${style['list_container']} ${dark ? style.dark : ''}`}>
        <ul className={style.list_links}>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/dashboard/">Exercise</NavLink>
          </li>
          <li>
            <NavLink href="/dashboard/">Food Plan</NavLink>
          </li>
          <li>
            <NavLink href="/dashboard/">Calculators</NavLink>
          </li>
        </ul>

        <div className={style.line}></div>

        <div>
          <li>
            <MdOutlineLogout
              className={`${style['theme']} ${dark ? style.sun : ''}`}
            />
            <Link href="/" onClick={() => setToggle(false)}>
              Logout
            </Link>
          </li>
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
      </div>
    </>
  )
}

export default MainMenu
