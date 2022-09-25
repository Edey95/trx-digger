import { useContext } from 'react'
import { UserContext, DarkModeContext } from "@/context";
import { useNavigate } from 'react-router-dom';

const { user, dispatch } = useContext(UserContext)
const navigate = useNavigate()

const handleLogout = async e => {
    e.preventDefault()
    localStorage.removeItem("user")    
    dispatch({ type: "LOGOUT" })
    console.log(user)
    navigate('/landing')
  }

export default UseAuth