import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Nav from "../../components/Nav/Nav";
import NavBar from "../../components/Navbar/NavBar";
import { getImage } from "../../services/index";
import orderLogo from "../../assets/LOGO.png"
import AppLogo from "../../assets/appStore.png"
import playStoreLogo from "../../assets/playStore.png"
import firstImg from "../../assets/first.png";
import TickBox from "../../assets/TickBox.png";
import Tracking from "../../assets/Tracking.png";
import PopularRestaurent from "../../components/PopularRestaurent/PopularRestaurent";

const Home = () => {
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
        <div className={styles.headerImages}>
          <div className={styles.text}>
            <p>Order Restaurant food, takeaway and groceries.</p>
            <h1>Feast Your Senses,</h1>
            <h3>Fast and Fresh</h3>
            <h4>Enter a postcode to see what we deliver</h4>
            <div className={styles.headerInput}>
              <input type="text" readOnly placeholder="e.g. EC4R 3TE" />
              <button>Search</button>
            </div>
          </div>
          <div className={styles.headerImage1}>
            {imageUrl.map((img,i) => (
              <img key={i} src={img.data.homeHederImg5} alt="header-image" />
            ))}
          </div>
          <div className={styles.headerImage2}>
            {imageUrl.map((img,i) => (
              <img key={i} src={img.data.homeHederImg4} alt="header-image" />
            ))}
          </div>
          <div className={styles.headerImage3}>
            {imageUrl.map((img,i) => (
              <img key={i} src={img.data.homeHederImg2} alt="header-image" />
            ))}
          </div>
          <div className={styles.headerImage4}>
            {imageUrl.map((img,i) => (
              <img key={i} src={img.data.homeHederImg3} alt="header-image" />
            ))}
          </div>
          <div className={styles.headerImage5}>
            <div className={styles.firstImage}>
            <img src={firstImg} alt="header-image" />
            <h4>We’ve Received your order!</h4>
            <div className={styles.tracking}><img src={Tracking} alt="" /></div>
            <h5>Awaiting Restaurant acceptance </h5>
            </div>
          </div>
          <div className={styles.headerImage6}>
            <div className={styles.firstImage1}>
            {imageUrl.map((img,i) => (
              <img key={i} src={img.data.homeHederImg1} alt="header-image" />
            ))}
            <h4>Order Accepted!</h4>
            <div className={styles.tick}><img src={TickBox} alt="" /></div>
            <h5>Your order will be delivered shortly</h5>
            </div>
          </div>
        </div>

        <div className={styles.section1}>
          <div className={styles.section1Header}>
            <h4>Up to -40% 🎊 Order.uk exclusive deals</h4>

            <div className={styles.itemList}>
              <p>Vegan</p>
              <p>Sushi</p>
              <div className={styles.pizza}>
                <h5>Pizza & Fastfood</h5>
              </div>
              <p>others</p>
            </div>
          </div>

          <div className={styles.section1Image}>
            <div className={styles.section1Image1}>
              {imageUrl.map((img,i) => (
                <img key={i} src={img.data.homeSection1Img1} alt="image" />
              ))}
            </div>
            <div className={styles.section1Image1}>
              {imageUrl.map((img,i) => (
                <img key={i} src={img.data.homeSection1Img2} alt="image" />
              ))}
            </div>
            <div className={styles.section1Image1}>
              {imageUrl.map((img,i) => (
                <img key={i} src={img.data.homeSection1Img3} alt="image" />
              ))}
            </div>
          </div>
        </div>

        

        <div className={styles.section2}>
          <div className={styles.section2Header}>
            <h4>Order.uk Popular Categories 🤩</h4>
          </div>

          <div className={styles.section2Image}>
            <div className={styles.section2Div1}>
            <div className={styles.section2Image1}>
              {imageUrl.map((img,i) => (
                <img key={i} src={img.data.homeSection2Img1} alt="image" />
              ))}
            </div>
            <div className={styles.cards}>
            <h3>Burgers & Fast food</h3>
            <h4>21 Restaurants</h4>
            </div>
            </div>

            <div className={styles.section2Div1}>
            <div className={styles.section2Image1}>
              {imageUrl.map((img,i) => (
                <img key={i} src={img.data.homeSection2Img2} alt="image" />
              ))}
            </div>
            <div className={styles.cards}>
            <h3>Salads</h3>
            <h4>32 Restaurants</h4>
            </div>
            </div>

            <div className={styles.section2Div1}>
            <div className={styles.section2Image1}>
              {imageUrl.map((img,i) => (
                <img key={i} src={img.data.homeSection2Img3} alt="image" />
              ))}
            </div>
            <div className={styles.cards}>
            <h3>Pasta & Casuals</h3>
            <h4>4 Restaurants</h4>
            </div>
            </div>

            <div className={styles.section2Div1}>
            <div className={styles.section2Image1}>
              {imageUrl.map((img,i) => (
                <img key={i} src={img.data.homeSection2Img4} alt="image" />
              ))}
            </div>
            <div className={styles.cards}>
            <h3>Pizza</h3>
            <h4>32 Restaurants</h4>
            </div>
            </div>

            <div className={styles.section2Div1}>
            <div className={styles.section2Image1}>
              {imageUrl.map((img,i) => (
                <img key={i} src={img.data.homeSection2Img5} alt="image" />
              ))}
            </div>
            <div className={styles.cards}>
            <h3>Breakfast</h3>
            <h4>4 Restaurants</h4>
            </div>
            </div>

            <div className={styles.section2Div1}>
            <div className={styles.section2Image1}>
              {imageUrl.map((img,i) => (
                <img key={i} src={img.data.homeSection2Img6} alt="image" />
              ))}
            </div>
            <div className={styles.cards}>
            <h3>Soups</h3>
            <h4>4 Restaurants</h4>
            </div>
            </div>

          </div>
        </div>
        <PopularRestaurent/>

        <div className={styles.Personalised}>
          <div className={styles.orderingImg}>
            <img src={orderLogo} alt="image" />
            <p>ing</p>
          </div>
          <div className={styles.instant}>
            <h3>Personalised & Instant</h3>
          </div>
          <h4>Download the Order.uk app for faster ordering</h4>
          <div className={styles.storeLogo}>
            <img src={AppLogo} alt="image" />
            <img src={playStoreLogo} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

