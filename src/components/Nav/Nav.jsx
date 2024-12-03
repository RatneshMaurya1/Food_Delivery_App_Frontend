import React from "react";
import orderImage from "../../assets/star.png";
import locationImage from "../../assets/Location.png";
import styles from "./nav.module.css";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import basketImg from "../../assets/Basket.png";
import forwordBtn from "../../assets/ForwardButton.png";
import menuImg from "../../assets/Menu.png";
import logoImg from "../../assets/LOGO.png";
import toast from "react-hot-toast";

const Nav = () => {
  const { handleCart } = useAuth();
  const navigate = useNavigate();
  const localAddress = JSON.parse(localStorage.getItem("Address"));

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
    handleScrollToTop();
  };

  return (
    <>
      <nav>
        <div className={styles.order}>
          <div className={styles.orderImg}>
            <img src={orderImage} alt="orderImage" />
          </div>
          <h1>
            Get 5% Off your first order, <span>Promo: ORDER5</span>
          </h1>
        </div>

        <div className={styles.locationCart}>
          <div className={styles.location}>
          {localAddress && (
            <>
            <div className={styles.locationImg}>
              <img src={locationImage} alt="locationImage" />
            </div>
            
              <h1>
                {localAddress.fullAddress},{localAddress.city},
                {localAddress.pinCode},{localAddress.state}
              </h1>
              </>
            )}
            <h3
              onClick={() => {
                if (!localStorage.getItem("token")) {
                  toast.error("Please log in to continue.");
                  return;
                };
                navigate("/address");
              }}
            >
              Change Location
            </h3>
          </div>

          <div className={styles.cart} onClick={handleOpenCart}>
            <div className={styles.cartImage}>
              <img src={basketImg} alt="basket-image" />
              <p>My Cart</p>
              <div className={styles.line}></div>
            </div>
            <div className={styles.forward}>
              <div className={styles.line}></div>
              <img src={forwordBtn} alt="forward-image" />
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.logo}>
            <img src={logoImg} alt="logo-image" />
          </div>
          <div className={styles.menuImage}>
            <div className={styles.line1}></div>
            <img src={menuImg} alt="menu-image" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
