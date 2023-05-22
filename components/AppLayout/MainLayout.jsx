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

const MainLayout = ({ children }) => {
  const router = useRouter()

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
          <MdOutlineTaskAlt />
          <BiMessageRounded />
          {/* {renderAdditionalDiv()} */}
          <BiHeart />
          <MdOutlineAccountCircle />
        </div>
      </div>
      <div className={style.main_navbar}>
        <div className={style.navbar_links}>
          <Link
            href="/exercise"
            className={router.pathname === '/exercise' ? style.activeLink : ''}
          >
            Exercise
          </Link>
          <Link
            href="/food-plan"
            className={router.pathname === '/food-plan' ? style.activeLink : ''}
          >
            Food Plan
          </Link>
          <Link
            href="/calculators"
            className={
              router.pathname === '/calculators' ? style.activeLink : ''
            }
          >
            Calculators
          </Link>
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
