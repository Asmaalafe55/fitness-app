import style from './AuthLayout.module.scss'
import { useRecoilState } from 'recoil'
import Image from 'next/image'
import { imagesArray } from '../../public/images/images'

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className={style.auth_navbar}>
        <div>
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
          <Image
            className={style.icon_menu}
            src={imagesArray.i_menu}
            width={100}
            height={50}
            alt="i_menu"
          />
        </div>
      </div>
      <div style={{ padding: '24px 12px', minHeight: 360 }}>{children}</div>
    </>
  )
}

export default AuthLayout
