import React, { useEffect, useState } from "react";
import styles from ".//cart.module.css";
import shareLink from "../../assets/share-2.png";
import basketImg from "../../assets/Basket.png";
import deleteBtn from "../../assets/Remove.png";
import downBtn from "../../assets/DownButton.png";
import NextButton from "../../assets/NextButton.png";
import DeliveryScooter from "../../assets/DeliveryScooter.png";
import arrowBtn from "../../assets/ArrowButton.png";
import newStore from "../../assets/NewStore.png";
import ErrorImg from "../../assets/Error.png";
import { DeleteCartItemById, getCartItem, getShareLink } from "../../services";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartUpdated }) => {
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartId, setCartId] = useState("");
  const [shareCartLoading, setShareCartLoading] = useState(false);
  const [loading, setLoading] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const getCarts = async () => {
      try {
        const response = await getCartItem();
        setCartItem(response.cart);
        setTotalPrice(response.totalPrice);
        setCartId(response.cartId);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getCarts();
  }, [loading, cartUpdated]);

  const handleDeleteCart = async (card) => {
    const itemId = card.cardId._id;

    if (loading[itemId]) return;
    setLoading((prev) => ({ ...prev, [itemId]: true }));
    try {
      const response = await DeleteCartItemById(itemId);
      if (response.message === "Item updated in the cart") {
        toast.success(response.message);

        const updatedCart = await getCartItem();
        setCartItem(updatedCart.cart);
        setTotalPrice(updatedCart.totalPrice);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, [itemId]: false }));
    }
  };

  const handleShareLink = async () => {
    setShareCartLoading(true);
    try {
      const response = await getShareLink();
      navigator.clipboard
        .writeText(response.shareableLink)
        .then(() => {
          toast.success("Link copied to clipboard!");
        })
        .catch((err) => {
          toast.error("Failed to copy: ", err);
        });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setShareCartLoading(false);
    }
  };

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.shareCart}>
          <img src={shareLink} alt="image" />
          <p>Share this cart with your friends</p>
          <button onClick={handleShareLink} disabled={shareCartLoading}>
            {shareCartLoading ? "Loading..." : "Copy Link"}
          </button>
        </div>

        <div className={styles.myCart}>
          <div className={styles.myCartHeader}>
            <img src={basketImg} alt="image" />
            <p>My Basket</p>
          </div>

          {cartItem.length > 0 ? (
            <>
              {cartItem.map((item) => (
                <div className={styles.cartItem} key={item._id}>
                  <div className={styles.units}>
                    <p>{item.quantity}x</p>
                  </div>
                  <div className={styles.itemName}>
                    <p>{item.price}</p>
                    <h3>{item.cardId.title}</h3>
                  </div>
                  <div className={styles.deleteItem}>
                    <img
                      src={deleteBtn}
                      onClick={() => handleDeleteCart(item)}
                      alt="image"
                    />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className={styles.emptyCart}>
              <p>Your cart is empty.</p>
            </div>
          )}

          <div className={styles.totalAmount}>
            <div className={styles.subTotalAmount}>
              <h3>Sub Total: </h3>
              <p>₹{totalPrice}:00</p>
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
              <p>₹{totalPrice}:00</p>
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
            {cartItem.length === 0 ? (
              <div className={styles.checkoutBtn1}>
                <img src={arrowBtn} alt="image" />
                <p>Checkout!</p>
                <div className={styles.errorImage}>
                  <img src={ErrorImg} alt="image" />
                  <div className={styles.errorMessage}>
                    <p>
                      Minimum delivery is ₹20, You must Spend{" "}
                      <span>₹20 more</span> for the checkout!
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.checkoutBtn}>
                <img src={arrowBtn} alt="image" />
                <p onClick={() => navigate(`/checkout/${cartId}`)}>Checkout!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
