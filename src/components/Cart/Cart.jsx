import React from 'react'
import styles from ".//cart.module.css"
import shareLink from "../../assets/share-2.png";
import basketImg from "../../assets/Basket.png";
import deleteBtn from "../../assets/Remove.png";
import downBtn from "../../assets/DownButton.png";
import NextButton from "../../assets/NextButton.png";
import DeliveryScooter from "../../assets/DeliveryScooter.png";
import arrowBtn from "../../assets/ArrowButton.png"
import newStore from "../../assets/NewStore.png";

const Cart = () => {
  return (
    <>
      <div className={styles.cart}>
          <div className={styles.shareCart}>
            <img src={shareLink} alt="image" />
            <p>Share this cart with your friends</p>
            <button>Copy Link</button>
          </div>

          <div className={styles.myCart}>
            <div className={styles.myCartHeader}>
              <img src={basketImg} alt="image" />
              <p>My Basket</p>
            </div>

            <div className={styles.cartItem}>
              <div className={styles.units}>
                <p>1x</p>
              </div>
              <div className={styles.itemName}>
                <p>₹120</p>
                <h3>Royal Cheese Burger</h3>
              </div>
              <div className={styles.deleteItem}>
                <img src={deleteBtn} alt="image" />
              </div>
            </div>

            <div className={styles.totalAmount}>
              <div className={styles.subTotalAmount}>
                <h3>Sub Total: </h3>
                <p>₹230.00</p>
              </div>
              <div className={styles.discount}>
                <h3>Discounts:</h3>
                <p>-₹3.00</p>
              </div>
              <div className={styles.fee}>
                <h3>Delivery Fee:</h3>
                <p>₹3.00</p>
              </div>
            </div>

            <div className={styles.toPay}>
              <div className={styles.totalToPay}>
                <h3>Total to pay</h3>
                <p>₹230.00</p>
              </div>
              <div className={styles.freeItem}>
                <p>Choose your free item..</p>
                <img src={downBtn} alt="image" />
              </div>
              <div className={styles.freeItem}>
                <p>Apply Coupon Code here</p>
                <img src={NextButton} alt="image" />
              </div>
            </div>

            <div className={styles.checkout}>
              <div className={styles.checkoutItemWrapper}>
                <div className={styles.deliveryStart}>
                  <img src={DeliveryScooter} alt="image" />
                  <h3>Delivery</h3>
                  <p>Starts at 17:50</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.colloction}>
                  <img src={newStore} alt="image" />
                  <h3>Collection</h3>
                  <p>Starts at 16:50</p>
                </div>
              </div>
              <div className={styles.checkoutBtn}>
                <img src={arrowBtn} alt="image" />
                <p>Checkout!</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Cart
