import React, { useState, useEffect } from "react";
import styles from "./product.module.css";
import Nav from "../../components/Nav/Nav";
import NavBar from "../../components/Navbar/NavBar";
import orderCompleteImg from "../../assets/OrderCompleted.png";
import orderInImg from "../../assets/Motocross.png";
import searchImg from "../../assets/SearchMore.png";
import clock from "../../assets/Clock.png";
import { getImage } from "../../services";

const Product = () => {
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    try {
      const getImageUrl = async () => {
        const response = await getImage();
        console.log(response.data);
        setImageUrl(response.data);
      };
      getImageUrl();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <NavBar />
        <div className={styles.productHeader}>
          <div className={styles.headerItem1}>
            <h3>I'm lovin' it!</h3>
            <h4>McDonald’s East London</h4>
            <div className={styles.orderWrapper}>
              <div className={styles.minimumOrder}>
                <img src={orderCompleteImg} alt="image" />
                <p>Minimum Order: 12 GBP</p>
              </div>
              <div className={styles.orderIn}>
                <img src={orderInImg} alt="image" />
                <p>Delivery in 20-25 Minutes</p>
              </div>
            </div>
          </div>
          <div className={styles.headerItem2}>
            <div className={styles.mainImg}>
              {imageUrl.map((img, i) => (
                <img key={i} src={img.data.productImage1} alt="header-image" />
              ))}
            </div>
            <div className={styles.rating}>
              {imageUrl.map((img, i) => (
                <img key={i} src={img.data.productImage2} alt="header-image" />
              ))}
            </div>
          </div>
          <div className={styles.clock}>
            <img src={clock} alt="image" />
            <p>Open until 3:00 AM</p>
          </div>
        </div>
        <div className={styles.search}>
          <h2>All Offers from McDonald’s East London</h2>
          <div className={styles.searchInput}>
            <img src={searchImg} alt="image" />
            <input type="text" placeholder="Search from menu..." />
          </div>
        </div>
      </div>
      <div className={styles.productList}>
        <div className={styles.offer}>
          <h3>Offers</h3>
        </div>
        <p>Burgers</p>
        <p>Fries</p>
        <p>Snacks</p>
        <p>Salads</p>
        <p>Cold drinks</p>
        <p>Happy Meal®</p>
        <p>Desserts</p>
        <p>Hot drinks</p>
        <p>Sauces</p>
        <p>Orbit®</p>
      </div>

      <div className={styles.main}>
        <div className={styles.section1Image}>
          <div className={styles.section1Image1}>
            {imageUrl.map((img, i) => (
              <img key={i} src={img.data.productImage3} alt="image" />
            ))}
          </div>
          <div className={styles.section1Image2}>
            {imageUrl.map((img, i) => (
              <img key={i} src={img.data.productImage4} alt="image" />
            ))}
          </div>
          <div className={styles.section1Image3}>
            {imageUrl.map((img, i) => (
              <img key={i} src={img.data.productImage5} alt="image" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
