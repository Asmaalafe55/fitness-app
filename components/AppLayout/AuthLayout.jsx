import style from './AuthLayout.module.scss'
import { useRecoilState } from 'recoil'
import { toggleState, darkState } from '../../lib/store'

import Image from 'next/image'
import Link from 'next/link'

import { AiOutlineMenu } from 'react-icons/ai'
import { HiX } from 'react-icons/hi'

import imagesArray from '../../public/images/images'
import AuthMenu from './../Menu/AuthMenu'

const AuthLayout = ({ children }) => {
  const [toggle, setToggle] = useRecoilState(toggleState)

  return (
    <>
      <div className={style.auth_navbar}>
        <div className={style.navbar_left_side}>
          <Link href="/">
            <Image
              className={style.logo_pic}
              src={imagesArray.logo}
              width={100}
              height={50}
              alt="logo"
            />
            <Image
              className={style.logo_fit_pic}
              src={imagesArray.logo_fit}
              width={100}
              height={50}
              alt="logo_fit"
            />
          </Link>
        </div>
        <div className={style.menu}>
          <AiOutlineMenu
            className={`${style['element']} ${toggle ? style.hidden : ''}`}
            onClick={() => setToggle(true)}
          />

          {toggle && (
            <>
              <HiX onClick={() => setToggle(false)} />
              <AuthMenu />
            </>
          )}
        </div>
      </div>
      <div className={style.children}>{children}</div>
    </>
  )
}

export default AuthLayout
