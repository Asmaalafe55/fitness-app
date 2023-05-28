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

function Tooltip({ icon, content, isActive }) {
  return (
    <span className={`${style.tooltip} ${isActive ? style.active : ''}`}>
      {icon}
      <span className={style.tooltip_content}>{content}</span>
    </span>
  )
}

const MainLayout = ({ children }) => {
  const [toggle, setToggle] = useRecoilState(toggleMenuState)
  const [windowWidth, setWindowWidth] = useState(0)
  const router = useRouter()

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
          <Tooltip
            icon={<MdOutlineTaskAlt />}
            content="Tasks"
            isActive={router.pathname.includes('/')}
          />
          <Tooltip
            icon={<BiMessageRounded />}
            content="Messages"
            isActive={router.pathname.includes('/dashboard/messages')}
          />
          {/* {renderAdditionalDiv()} */}
          <Tooltip
            icon={<BiHeart />}
            content="Favorites"
            isActive={router.pathname.includes('/dashboard/favorites')}
          />
          <Tooltip
            icon={<MdOutlineAccountCircle />}
            content="Profile"
            isActive={router.pathname === '/dashboard/profile'}
          />
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
