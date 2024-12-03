import React from "react";
import styles from "./paymentnav.module.css";
import navbarImage from "../../assets/LOGO.png";
import userImage from "../../assets/User.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import basketImg from "../../assets/Basket.png";
import avatarImg from "../../assets/avatar.png";
import locationImage from "../../assets/Location.png";
import toast  from "react-hot-toast";


const PaymentNav = ({ setIsCartOpen }) => {
  const navigate = useNavigate();
  const { isLoggedIn, userName, handleCart } = useAuth();
  const id = localStorage.getItem("userId");
  const localAddress = JSON.parse(localStorage.getItem("Address"));


  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleSignIp = () => {
    navigate("/");
  };
  const handleProfile = () => {
    navigate(`/profile`);
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 950,
      behavior: "smooth",
    });
  };
  const handleOpenCart = () => {
    if (!localStorage.getItem("token")) {
        toast.error("Please log in to continue.");
        return;
      }
    handleCart();
    navigate("/product");
    setIsCartOpen(true);
    setIsCartOpen(true)
    handleScrollToTop();
  };
  const displayName = userName ? `${userName.slice(0, 8)}...` : null;
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <img src={navbarImage} alt="navbar-image" />
        </div>
        <div className={styles.page}>
          <p>Home</p>

       
          <p>Browse Menu</p>
          <p>Special Offers</p>
          <div className={styles.HomePage}>
            <h1>Restaurants</h1>
          </div>
          <p>Track Order</p>
          <div className={styles.loginRegister}>
            <div className={styles.userImg}>
              <img src={userImage} alt="user-image" />
            </div>
            {isLoggedIn ? (
              <h1 onClick={handleProfile}>Hey {displayName}</h1>
            ) : (
              <h1>
                <span onClick={handleSignIp}>Login</span>/
                <span onClick={handleSignUp}>Signup</span>
              </h1>
            )}
          </div>
        </div>

        <div className={styles.cartProfile}>
          <div className={styles.profileImage}>
            <div className={styles.avatar}>
              <img src={avatarImg} alt="avatar-image" />
            </div>
            {isLoggedIn ? (
              <h1 onClick={handleProfile}>Hey {displayName}</h1>
            ) : (
              <h1>
                <span onClick={handleSignIp}>Login</span>/
                <span onClick={handleSignUp}>Signup</span>
              </h1>
            )}
          </div>
          <div className={styles.cart} onClick={handleOpenCart}>
            <img src={basketImg} alt="basket-image" />
            <p>My Cart</p>
          </div>
        </div>
     
      </div>
      <div className={styles.address}>
      {localAddress && (
        <>
      <img src={locationImage} alt="locationImage" />
      
          <h1>
            {localAddress.fullAddress},{localAddress.city},
            {localAddress.pinCode},{localAddress.state}
          </h1>
          </>
        )}
        <h3 onClick={() => navigate("/address")}>Change Location</h3>
        </div>
    </>
  );
};

export default PaymentNav;
