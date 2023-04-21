import style from './AuthLayout.module.scss'
import { useRecoilState } from 'recoil'
import { toggleState } from '../../lib/store'

import Image from 'next/image'
import Link from 'next/link'

import { AiOutlineMenu } from 'react-icons/ai'
import { HiX } from 'react-icons/hi'
import imagesArray from '../../public/images/images'

const AuthLayout = ({ children }) => {
  const [toggle, setToggle] = useRecoilState(toggleState)

  return (
    <>
      <div className={style.auth_navbar}>
        <div>
          <Link href="/">
            <Image
              className={style.logo_pic}
              src={imagesArray.logo}
              width={100}
              height={50}
              alt="logo"
            />
          </Link>
          <Image
            className={style.logo_fit_pic}
            src={imagesArray.logo_fit}
            width={100}
            height={50}
            alt="logo_fit"
          />
          <AiOutlineMenu
            className={style.icon_menu}
            onClick={() => setToggle(true)}
          />
          {toggle && (
            <>
              <HiX className={style.icon_x} onClick={() => setToggle(false)} />
              <ul className={style.list_links}>
                <li>
                  <Link href="/" onClick={() => setToggle(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={() => setToggle(false)}>
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={() => setToggle(false)}>
                    Sign Up
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
      <div style={{ padding: '24px 12px', minHeight: 360 }}>{children}</div>
    </>
  )
}

export default AuthLayout
