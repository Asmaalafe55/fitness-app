import { useRouter } from 'next/router'

const MainLayout = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <div>{children}</div>
    </>
  )
}

export default MainLayout
