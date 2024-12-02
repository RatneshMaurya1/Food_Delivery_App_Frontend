import React, { useEffect, useState } from "react";
import styles from "./burgers.module.css";
import { createCart, getFoodItem } from "../../services";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthContext";

const Burgers = ({ onCartUpdate, setIsCartOpen, search }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setShowCart, setAllCardName } = useAuth();

  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await getFoodItem();
        setCards(response.cards);
        setAllCardName(response.cards.map((e) => e.name));
      } catch (error) {
        toast.error(error.message);
      }
    };
    getCards();
  }, []);

  const handleCards = async (card) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in to add items to your cart.");
      return;
    }
    if (loading[card._id]) return;
    setIsCartOpen(true);
    setLoading((prev) => ({ ...prev, [card._id]: true }));
    setShowCart(true);
    try {
      const response = await createCart({ cardId: card._id });
      if (response.message === "Item added to cart") {
        toast.success(response.message);
        onCartUpdate();
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, [card._id]: false }));
    }
  };

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(search.toLowerCase())
  );

  const BurgerCards = filteredCards.filter((card) => card.name === "Burgers");
  const FriesCards = filteredCards.filter((card) => card.name === "Fries");
  const ColdDrinkCards = filteredCards.filter((card) => card.name === "Cold Drinks");

  const isNoResultsFound = filteredCards.length === 0;

  return (
    <div className={styles.foodItem}>
    
      {isNoResultsFound ? (
        <div className={styles.notAvailable}>
          <p>No items found matching your search.</p>
        </div>
      ) : (
        <>
        
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
                        <img
                          src={burgerCard.addImage}
                          onClick={() => handleCards(burgerCard)}
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.notAvailable}>
              <p></p>
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
                        <img
                          src={friesCard.addImage}
                          onClick={() => handleCards(friesCard)}
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.notAvailable}>
              <p></p>
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
                        <img
                          src={coldDrinkCard.mainImage}
                          alt={coldDrinkCard.title}
                        />
                      </div>
                      <div className={styles.addBg}>
                        <img src={coldDrinkCard.addImageBg} alt="image" />
                      </div>
                      <div className={styles.addImg}>
                        <img
                          src={coldDrinkCard.addImage}
                          onClick={() => handleCards(coldDrinkCard)}
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.notAvailable}>
              <p></p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Burgers;
