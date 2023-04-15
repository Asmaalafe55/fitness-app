import style from './AuthLayout.module.scss'
import { useRecoilState } from 'recoil'

import Image from 'next/image'
import Link from 'next/link'

import { AiOutlineMenu } from 'react-icons/ai'
import { HiX } from 'react-icons/hi'
import { imagesArray } from '../../public/images/images'

const AuthLayout = ({ children }) => {
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
          {/* <AiOutlineMenu onClick={() => setToggle(true)} /> 
          <HiX onClick={() => setToggle(false)} />
          // this toggle will be recoil : to do that i need to learn how to do
          it 
          */}
        </div>
      </div>
      <div style={{ padding: '24px 12px', minHeight: 360 }}>{children}</div>
    </>
  )
}

export default AuthLayout
