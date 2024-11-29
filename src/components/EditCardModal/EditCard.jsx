import React, { useState } from "react";
import toast from "react-hot-toast";
import { updatedDebitCard, userDebitCard } from "../../services/index";
import styles from "./editcard.module.css";

const EditCard = ({ isEditCard, onCloseCard, setIsEditCard, cardId }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expire: "",
    cvc: "",
    cardName: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const { cardNumber, expire, cvc, cardName } = formData;
    if (!cardNumber && !expire && !cvc && !cardName) {
      return toast.error("At least one field is required to update.")
    }

    setLoading(true);
    try {
      const response = await updatedDebitCard(formData,cardId);
      if (response.message === "card updated successfully") {
        toast.success(response.message);
        setFormData({
          cardNumber: "",
          expire: "",
          cvc: "",
          cardName: "",
        });
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      setIsEditCard(false);
    }
  };

  if (!isEditCard) return null;

  return (
    <div className={styles.overlay} onClick={onCloseCard}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <h2>Edit Payment Method</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Card Number
            <input
              type="text"
              placeholder="XXXX XXXX XXXX 1234"
              value={formData.cardNumber}
              onChange={(e) =>
                setFormData({ ...formData, cardNumber: e.target.value })
              }
            />
          </label>
          <label>
            Expiration
            <input
              type="text"
              placeholder="MM/YY"
              value={formData.expire}
              onChange={(e) =>
                setFormData({ ...formData, expire: e.target.value })
              }
            />
          </label>
          <label>
            CVC
            <input
              type="text"
              placeholder="XXX"
              value={formData.cvc}
              onChange={(e) =>
                setFormData({ ...formData, cvc: e.target.value })
              }
            />
          </label>
          <label>
            Name on Card
            <input
              type="text"
              placeholder="Your Name"
              value={formData.cardName}
              onChange={(e) =>
                setFormData({ ...formData, cardName: e.target.value })
              }
            />
          </label>
          <div className={styles.actions}>
            <button className={styles.removeButton}>Remove</button>

            <div className={styles.cancelSaveButton}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={onCloseCard}
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className={styles.saveButton}
              >
                {loading ? "Loading" : "Save Changes"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCard;
