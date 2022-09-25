import { UserContext } from "@/context"
import axios from "axios"
import { BACKEND_API_URL } from "@/config"
import { useContext, useState, useEffect } from "react"
import "./login.scss"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  })
  const navigate = useNavigate()
  const { user, isLoading, error, dispatch } = useContext(UserContext)
  
  useEffect(() => {
    if(user) navigate('/dashboard')
  }, [])

  const handleChange = e => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  };

  const handleClick = async e => {
    e.preventDefault()
    dispatch({ type: "LOGIN_START" })
    try {
      const res = await axios.post(`${BACKEND_API_URL}/auth/signin`, credentials)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
      navigate("/dashboard")
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error })
    }
  }

  return (
    <div className="login">
      <div className="login__container">
        <input type="email" placeholder="email" name="" id="email" onChange={handleChange} />
        <input type="password" placeholder="password" name="" id="password" onChange={handleChange} />
        <button disabled={isLoading} className="login__button" type="submit" onClick={handleClick}>Login</button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  )
}

export default Login