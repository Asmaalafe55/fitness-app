import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imagesArray from '../../public/images/images'
import style from './MainLayout.module.scss'

import { useRecoilState } from 'recoil'
import { toggleMenuState } from '../../lib/store'

import { BiHeart, BiMessageRounded, BiMenu } from 'react-icons/bi'
import {
  MdOutlineNotificationsNone,
  MdOutlineTaskAlt,
  MdOutlineAccountCircle
} from 'react-icons/md'
import { HiX } from 'react-icons/hi'

import MainMenu from './../Menu/MainMenu'

function NavLink({ href, children }) {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <a href={href} className={isActive ? style.activeLink : style.unActiveLink}>
      {children}
    </a>
  )
}

const MainLayout = ({ children }) => {
  const [toggle, setToggle] = useRecoilState(toggleMenuState)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const renderAdditionalDiv = () => {
    if (windowWidth < 800) {
      return (
        <Link href="/">
          <Image src={imagesArray.logo} alt="logo" width={45} />
        </Link>
      )
    }
    return null
  }

  return (
    <>
      <div className={style.main_sidebar}>
        <Link href="/" className={style.logo}>
          <Image src={imagesArray.logo} alt="logo" width={45} />
        </Link>

        <div className={style.sidebar_icons}>
          <span className={style.tooltip}>
            <MdOutlineTaskAlt />
            <span className={style.tooltip_content}>Tasks</span>
          </span>
          <span className={style.tooltip}>
            <BiMessageRounded />
            <span className={style.tooltip_content}>Massages</span>
          </span>

          {/* {renderAdditionalDiv()} */}
          <span className={style.tooltip}>
            <BiHeart />
            <span className={style.tooltip_content}>Favorits</span>
          </span>
          <span className={style.tooltip}>
            <MdOutlineAccountCircle />
            <span className={style.tooltip_content}>Profile</span>
          </span>
        </div>
      </div>
      <div className={style.main_navbar}>
        <div className={style.navbar_links}>
          <NavLink href="/dashboard/exercise">Exercise</NavLink>
          <NavLink href="/dashboard/food-plan">Food Plan</NavLink>
          <NavLink href="/dashboard/calculators">Calculators</NavLink>
        </div>
        <div className={style.navbar_icons}>
          <MdOutlineNotificationsNone className={style.notification_icon} />
          <BiMenu
            className={`${style['element']} ${toggle ? style.hidden : ''}`}
            onClick={() => setToggle(true)}
          />
          {toggle && (
            <>
              <HiX onClick={() => setToggle(false)} />
              <MainMenu />
            </>
          )}
        </div>
      </div>
      <div>{children}</div>
    </>
  )
}

export default MainLayout
