import React from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'

const MainMenu = () => {
  const setToggle = useSetRecoilState(toggleState)

  return (
    <>
      <div className={`${style['list_container']} ${dark ? style.dark : ''}`}>
        <ul className={style.list_links}>
          <li>
            <Link href="/" onClick={() => setToggle(false)}>
              Home
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
