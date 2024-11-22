import React from "react";
import orderImage from "../../assets/star.png";
import locationImage from "../../assets/Location.png";
import cartImage from "../../assets/cartImage.png";
import styles from "./nav.module.css";

const Nav = () => {
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
            <div className={styles.locationImg}>
              <img src={locationImage} alt="locationImage" />
            </div>
            <h1>Regent Street, A4, A4201, London</h1>
            <h3>Change Location</h3>
          </div>

          <div className={styles.cart}>
            <img src={cartImage} alt="locationImage" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
