import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import style from './MainLayout.module.scss'
import imagesArray from '../../public/images/images'

import { BiHeart, BiUser, BiMessageRounded } from 'react-icons/bi'
import {
  MdOutlineNotificationsNone,
  MdOutlineTaskAlt,
  MdOutlineAccountCircle
} from 'react-icons/md'

const MainLayout = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <div className={style.main_sidebar}>
        <Link href="/">
          <Image src={imagesArray.logo} alt="logo" width={45} />
        </Link>
        <div className={style.icons_section}>
          <MdOutlineTaskAlt />
          <BiMessageRounded />
          <MdOutlineAccountCircle />
          <BiHeart />
        </div>
      </div>
      <div className={style.main_navbar}></div>
      <div>{children}</div>
    </>
  )
}

export default MainLayout
