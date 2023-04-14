// import style from './authLayout.module.scss'
import { useRecoilState } from 'recoil'

const AuthLayout = ({ children }) => {
  // Customize the auth layout here
  return <div style={{ padding: '24px 12px', minHeight: 360 }}>{children}</div>
}

export default AuthLayout
