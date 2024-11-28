import React from "react";
import styles from "./Payment.module.css";
import AllNavBar from "../../components/AllNavbar/AllNavbar";
import Nav from "../../components/Nav/Nav";
import arrow from "../../assets/arrow-left.png";
import forwardAddressImg from "../../assets/forwardAddress.png";
import walletImg from "../../assets/Wallet.png"
import mImage from "../../assets/M.png"
import pImage from "../../assets/P.png"
import sImage from "../../assets/S.png"
import SimilarRestaurent from "../../components/SimilarRestaurent/SimilarRestaurent"
import Footer from "../../components/Footer/Footer"
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate()
  return (
    <>
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

              <div className={styles.paymentCards}>
                  <div className={styles.paymentCardsWrapper}>
                    <div className={styles.mastercard}>
                    <img src={mImage} alt="image " />
                    </div>
                    <div className={styles.cardTitle}>
                      <h3>MasterCard</h3>
                    </div>
                  </div>
                  <div className={styles.check}>
                  <input type="checkbox" />
                  </div>
                </div>

              <div className={styles.paymentCards}>
                  <div className={styles.paymentCardsWrapper}>
                    <div className={styles.mastercard}>
                    <img src={pImage } alt="image " />
                    </div>
                    <div className={styles.cardTitle}>
                      <h3>Paypal</h3>
                    </div>
                  </div>
                  <div className={styles.check}>
                  <input type="checkbox" />
                  </div>
                </div>

              <div className={styles.paymentCards}>
                  <div className={styles.paymentCardsWrapper}>
                    <div className={styles.mastercard}>
                    <img src={sImage} alt="image " />
                    </div>
                    <div className={styles.cardTitle}>
                      <h3>Stripe</h3>
                    </div>
                  </div>
                  <div className={styles.check}>
                  <input type="checkbox" />
                  </div>
                </div>

              <div className={styles.addCards}>
                  <div className={styles.addCardssWrapper}>
                    <div className={styles.addBtn}>
                    <button>+</button>
                    </div>
                    <div className={styles.addBtnTitle}>
                      <h3>Add Debit Card</h3>
                    </div>
                  </div>
                  <img src={forwardAddressImg} alt="" />
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
      <div className={styles.similarRestaurentWrapper}>
      <SimilarRestaurent />
    </div>
    <Footer />
    </>
  );
};

export default Payment;
