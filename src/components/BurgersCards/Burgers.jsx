import React, { useEffect, useState } from "react";
import styles from "./burgers.module.css";
import { getFoodItem } from "../../services";
import toast from "react-hot-toast";

const Burgers = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await getFoodItem();
        setCards(response.cards);
      } catch (error) {
        toast.error(response.message);
      }
    };
    getCards();
  }, []);

  const BurgerCards = cards.filter((card) => card.name === "Burgers");
  const FriesCards = cards.filter((card) => card.name === "Fries");
  const ColdDrinkCards = cards.filter((card) => card.name === "Cold Drinks")
  return (
    <div className={styles.foodItem}>
      {BurgerCards.length > 0 ? (
        <div className={styles.burger}>
          <h2>Burgers</h2>
          <div className={styles.cardWrapper}>
            {BurgerCards.map((burgerCard) => (
              <div className={styles.burgerCard} key={burgerCard._id}>
                <div className={styles.cardDetails}>
                  <h3>{burgerCard.title}</h3>
                  <h4>{burgerCard.description}</h4>
                  <h5>{burgerCard.price}</h5>
                </div>
                <div className={styles.burgerCardImg}>
                  <div className={styles.mainImg}>
                    <img src={burgerCard.mainImage} alt={burgerCard.title} />
                  </div>
                  <div className={styles.addBg}>
                    <img src={burgerCard.addImageBg} alt="image" />
                  </div>
                  <div className={styles.addImg}>
                    <img src={burgerCard.addImage} alt="image" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.notAvailable}>
        <p>No items available at the moment.</p>
        </div>
      )}

      {FriesCards.length > 0 ? (
        <div className={styles.burger}>
          <h2 className={styles.fries}>Fries</h2>
          <div className={styles.cardWrapper}>
            {FriesCards.map((friesCard) => (
              <div className={styles.burgerCard} key={friesCard._id}>
                <div className={styles.cardDetails}>
                  <h3>{friesCard.title}</h3>
                  <h4>{friesCard.description}</h4>
                  <h5>{friesCard.price}</h5>
                </div>
                <div className={styles.burgerCardImg}>
                  <div className={styles.mainImg}>
                    <img src={friesCard.mainImage} alt={friesCard.title} />
                  </div>
                  <div className={styles.addBg}>
                    <img src={friesCard.addImageBg} alt="image" />
                  </div>
                  <div className={styles.addImg}>
                    <img src={friesCard.addImage} alt="image" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.notAvailable}>
        <p>No items available at the moment.</p>
        </div>
      )}

      {ColdDrinkCards.length > 0 ? (
        <div className={styles.burger}>
          <h2 className={styles.fries}>Cold Drinks</h2>
          <div className={styles.cardWrapper}>
            {ColdDrinkCards.map((coldDrinkCard) => (
              <div className={styles.burgerCard} key={coldDrinkCard._id}>
                <div className={styles.cardDetails}>
                  <h3>{coldDrinkCard.title}</h3>
                  <h4>{coldDrinkCard.description}</h4>
                  <h5>{coldDrinkCard.price}</h5>
                </div>
                <div className={styles.burgerCardImg}>
                  <div className={styles.mainImg}>
                    <img src={coldDrinkCard.mainImage} alt={coldDrinkCard.title} />
                  </div>
                  <div className={styles.addBg}>
                    <img src={coldDrinkCard.addImageBg} alt="image" />
                  </div>
                  <div className={styles.addImg}>
                    <img src={coldDrinkCard.addImage} alt="image" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.notAvailable}>
        <p>No items available at the moment.</p>
        </div>
      )}


    </div>
  );
};

export default Burgers;
