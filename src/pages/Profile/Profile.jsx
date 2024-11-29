import React, { useState, useEffect } from "react";
import styles from "./profile.module.css";
import AllNavBar from "../../components/AllNavbar/AllNavbar";
import Nav from "../../components/Nav/Nav";
import arrow from "../../assets/arrow-left.png";
import { useNavigate } from "react-router-dom";
import profileImg from "../../assets/avatar.png";
import cardImage from "../../assets/credit-card.png";
import cardEditImage from "../../assets/cardEdit.png";
import Footer from "../../components/Footer/Footer";
import EditCard from "../../components/EditCardModal/EditCard";
import AddCardInProfile from "../../components/AddcardInProfile/addCardInProfile";
import { UserCard } from "../../services";

const Profile = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isEditCard, setIsEditCard] = useState(false);
  const [userDebitCard, setUserDebitCard] = useState([]);
  const [cardId, setCardId] = useState(null);
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  const handleEditPopupCard = () => setIsEditCard(false);

  const handleEditCard = (id) => {
    setIsEditCard(true);
    setCardId(id);
  };
  

  useEffect(() => {
    const getDebitCard = async () => {
      try {
        const response = await UserCard();
        setUserDebitCard(response.userCard);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getDebitCard();
  }, [isPopupOpen]);
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <div className={styles.allNav}>
          <AllNavBar />
        </div>
        <div className={styles.checkoutName}>
          <img src={arrow} alt="Back" onClick={() => navigate(-1)} />
          <h1>My Profile</h1>
        </div>
        <div className={styles.profileContainer}>
          <div className={styles.profileImageContainer}>
            <div className={styles.profileImage}>
              <img src={profileImg} alt="profile-image" />
              <p>{name}</p>
            </div>
            <div className={styles.saveEditButton}>
              <button>Edit</button>
            </div>
          </div>
          <div className={styles.profileDetails}>
            <div className={styles.profileFullName}>
              <p>Full Name</p>
              <input
                type="text"
                placeholder="Enter your full name"
                value="Mike Ross"
              />
            </div>
            <div className={styles.profileEmail}>
              <p>Email Address</p>
              <input
                type="text"
                placeholder="Enter your email"
                value="mikeross@gmail.com"
              />
            </div>
            <div className={styles.profileGender}>
              <p>Gender</p>
              <input type="text" placeholder="Enter your gerder" value="Male" />
            </div>
            <div className={styles.profileCountry}>
              <p>Country</p>
              <input
                type="text"
                placeholder="Enter your Country Name"
                value="India"
              />
            </div>
          </div>
          <div className={styles.line}></div>

          <div className={styles.debitCards}>
            <h3>Saved Payment Methods</h3>

            <div className={styles.cardDetailsWrapper}>
              {userDebitCard ? (
                userDebitCard.map((debitCard) => (
                  <div className={styles.cardDetails} key={debitCard._id}>
                    <div className={styles.cardImg}>
                      <img src={cardImage} alt="card-image" />
                    </div>
                    <div className={styles.cardnumber}>
                      <p>{debitCard.cardNumber}</p>
                      <h3>{debitCard.cardName}</h3>
                    </div>
                    <img
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditCard(debitCard._id);
                      }}
                      src={cardEditImage}
                      alt="card-edit-image"
                    />
                  </div>
                ))
              ) : (
                <p>No debit cards right now</p>
              )}

              <div className={styles.addCards}>
                <button onClick={() => setPopupOpen(true)}>+</button>
                <p>Add New Card</p>
              </div>
            </div>
          </div>
        </div>
        <EditCard
          isEditCard={isEditCard}
          onCloseCard={handleEditPopupCard}
          cardId={cardId}
          setIsEditCard={setIsEditCard}
        />
        <AddCardInProfile
          isOpen={isPopupOpen}
          onClose={() => setPopupOpen(false)}
          setPopupOpen={setPopupOpen}
        />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
