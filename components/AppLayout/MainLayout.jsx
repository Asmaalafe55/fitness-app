import { useRecoilState, useRecoilValue } from 'recoil'

import { userDataAtom } from 'lib/recoil/atoms'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'


const MainLayout = ({ children }) => {
  const userData = useRecoilValue(userDataAtom)
  const router = useRouter()

  return (
    <div>
      {children}
    </div>
  )
}

export default MainLayout
