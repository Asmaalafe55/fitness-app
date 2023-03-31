import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useEffect } from 'react'
import { getRole, isAuthorized } from './utils/useAuth'
import Style from './style.module.scss'
import './reset.scss'

function App() {
  const logToken = getRole(document.cookie.valueOf('userToken'))
  const isLoggedIn = document.cookie.indexOf('userToken') !== -1
  useEffect(() => {
    if (
      window.location.pathname !== '/' &&
      document.cookie.indexOf('userToken') === -1
    ) {
      window.location.href = '/'
    }
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <Router>
        <div className={Style.pageBody}>
          <div className={Style.mainPage}>
            <Routes></Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}
export default App
