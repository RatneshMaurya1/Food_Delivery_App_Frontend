import React from 'react'
import styles from "./navbar.module.css"
import navbarImage from "../../assets/LOGO.png"
import userImage from "../../assets/User.png"
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()

  const handleSignUp = () => {
    navigate("/signup")
  }
  const handleSignIp = () => {
    navigate("/")
  }
  return (
    <>
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img src={navbarImage} alt="navbar-image" />
      </div>
      <div className={styles.page}>
        <div className={styles.HomePage}>
        <h1>Home</h1>
        </div>
        <p>Browse Menu</p>
        <p>Special Offers</p>
        <p>Restaurants</p>
        <p>Track Order</p>
        <div className={styles.loginRegister}>
            <div className={styles.userImg}>
                <img src={userImage} alt="user-image" />
            </div>
            <h1><span onClick={handleSignIp}>Login</span>/<span onClick={handleSignUp}>Signup</span></h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default NavBar
