import React,{ useContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import { App } from '@/pages'
import { New, Single, Home, List, Login, Register } from './Dashboard'

import { productInputs, userInputs } from "@/constants";
import "@/pages/Dashboard/dark.scss";
import { UserContext, DarkModeContext } from "@/context";

import { ProtectedRoutes } from '@/components/ProtectedRoutes'
import { useLocation } from 'wouter';

const GlobalRouter = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { user, dispatch } = useContext(UserContext);
  
  const [isAdmin, setIsAdmin] = useState(false)
  const [isModerator, setIsModerator] = useState(false)

  const location = useLocation()

  {/* useEffect(() => {
    if (user) {
      for (let i = 0; i < user.userLoged.roles.length; i++) {
        if (user.userLoged.roles[i].name.includes('admin')) {
          setIsAdmin(true)
          console.log('Soy Admin');
        }
        if (user.userLoged.roles[i].name.includes('moderator')) {
          setIsModerator(true)
          console.log('Soy Moderator');
        }
      }
    }
  }, [location]) */}


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          {/* Landing page routes */}
          <Route index element={<App />} />
          <Route path='/landing' element={<App />} />

          {/* Auth routes */}
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Dashboard routes */}
          <Route element={<ProtectedRoutes isAllowed={!!user} redirectTo='/landing' />}>
            <Route path="/dashboard">
              <Route index element={<Home />} />

              <Route element={<ProtectedRoutes
                isAllowed={!!user}
                redirectTo='/dashboard' />}>
                <Route path="users">
                  <Route index element={<List />} />
                  <Route path=":userId" element={<Single />} />
                  <Route
                    path="new"
                    element={<New inputs={userInputs} title="Add New User" />}
                  />
                </Route>
                <Route path="products">
                  <Route index element={<List />} />
                  <Route path=":productId" element={<Single />} />
                  <Route
                    path="new"
                    element={<New inputs={productInputs} title="Add New Product" />}
                  />
                </Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default GlobalRouter
