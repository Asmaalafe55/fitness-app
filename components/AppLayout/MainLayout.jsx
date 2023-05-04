import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import style from './MainLayout.module.scss'
import imagesArray from '../../public/images/images'

const MainLayout = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <div className={style.main_sidebar}>
        <Image src={imagesArray.logo} alt="logo" width={45} />
      </div>
      <div className={style.main_navbar}></div>
      <div>{children}</div>
    </>
  )
}

export default MainLayout
