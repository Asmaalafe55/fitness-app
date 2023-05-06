import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import style from './MainLayout.module.scss'
import imagesArray from '../../public/images/images'

import { useRecoilState, useRecoilValue } from 'recoil'
import { toggleMenuState, darkState } from '../../lib/store'

import { BiHeart, BiUser, BiMessageRounded, BiMenu } from 'react-icons/bi'
import {
  MdOutlineNotificationsNone,
  MdOutlineTaskAlt,
  MdOutlineAccountCircle
} from 'react-icons/md'

const MainLayout = ({ children }) => {
  const router = useRouter()

  const [toggle, setToggle] = useRecoilState(toggleMenuState)
  const dark = useRecoilValue(darkState)

  return (
    <>
      <div className={style.main_sidebar}>
        <Link href="/">
          <Image src={imagesArray.logo} alt="logo" width={45} />
        </Link>
        <div className={style.sidebar_icons}>
          <MdOutlineTaskAlt />
          <BiMessageRounded />
          <MdOutlineAccountCircle />
          <BiHeart />
        </div>
      </div>
      <div className={style.main_navbar}>
        <div className={style.navbar_links}>
          <Link href="/">Exercise</Link>
          <Link href="/">Food Plan</Link>
          <Link href="/">Calculators</Link>
        </div>
        <div className={style.navbar_icons}>
          <MdOutlineNotificationsNone />
          <BiUser />
          <BiMenu
            className={`${style['element']} ${toggle ? style.hidden : ''}`}
            onClick={() => setToggle(true)}
          />
        </div>
      </div>
      <div>{children}</div>
    </>
  )
}

export default MainLayout
