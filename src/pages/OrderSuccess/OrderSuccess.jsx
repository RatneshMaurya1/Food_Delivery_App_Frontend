import React from 'react'
import styles from "./orderSuccess.module.css"
import Nav from "../../components/Nav/Nav"
import AllNavBar from "../../components/AllNavbar/AllNavbar"
import successImg from "../../assets/success.png"
import Footer from "../../components/Footer/Footer"

const OrderSuccess = () => {
  const title = JSON.parse(localStorage.getItem("title"))
  return (
    <>
    <div className={styles.container}>
      <Nav/>
      <div className={styles.allNav}>
        <AllNavBar/>
      </div>
      <div className={styles.successWrapper}>
      <div className={styles.success}>
        <div className={styles.successImage}>
          <img src={successImg} alt="success-image" />
        </div>
      </div>
      <h3>Order Placed Successfully</h3>
      <div className={styles.orderDescription}>
        <p>Your order is confirmed and on its way. Get set to </p>
        <h3>savor your chosen delights!</h3>
      </div>
      <div className={styles.orderDetails}> 
        {title && title.map((item,i) => (
          <p key={i}>{item}</p>
        ))}
        <button>Back to Home</button>
      </div>
      </div>
    </div>
    <div className={styles.footer}>
    <Footer/>
    </div>
    </>
  )
}

export default OrderSuccess
