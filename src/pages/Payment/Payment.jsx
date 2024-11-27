import React from "react";
import styles from "./Payment.module.css";
import AllNavBar from "../../components/AllNavbar/AllNavbar";
import Nav from "../../components/Nav/Nav";
import arrow from "../../assets/arrow-left.png";
import forwardAddressImg from "../../assets/forwardAddress.png";
import walletImg from "../../assets/Wallet.png"

const Payment = () => {
  return (
    <div className={styles.paymentContainer}>
      <Nav />
      <div className={styles.allNav}>
        <AllNavBar />
      </div>

      <div className={styles.checkout}>
        <div className={styles.checkoutName}>
          <img src={arrow} alt="image" onClick={() => navigate(-1)} />
          <h1>Your Order Details</h1>
        </div>

        <div className={styles.Details}>
          <div className={styles.notesAndDetails}>
            <div className={styles.getItem}>
              <div className={styles.allItem}>
                <div className={styles.checkoutDetails}>
                  <div className={styles.checkoutDetailsWrapper}>
                    <div className={styles.wallet}>
                    <img src={walletImg} alt="image " />
                    </div>
                    <div className={styles.cartTitle}>
                      <h3>Wallet</h3>
                      <p>Available balance: ₹300</p>
                    </div>
                  </div>
                  <img src={forwardAddressImg} alt="" />
                </div>
                <div className={styles.line}></div>
              </div>

              <div className={styles.notes}>
                <p>Notes</p>
                <textarea readOnly placeholder="Add order notes"></textarea>
              </div>
            </div>
          </div>

          <div className={styles.allAddressDetails}>
            <div className={styles.allAmount}>
            <div className={styles.amount}>
              <p>Amount to be payed</p>
              <h3>₹240</h3>
            </div>
            <div className={styles.line2}></div>

            <button onClick={() => navigate(`/payment/${id}`)}>
              Choose Payment Method
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
