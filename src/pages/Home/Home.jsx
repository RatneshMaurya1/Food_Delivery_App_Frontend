import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Nav from "../../components/Nav/Nav";
import NavBar from "../../components/Navbar/NavBar";
import { getImage } from "../../services/index";
import firstImg from "../../assets/first.png";
import TickBox from "../../assets/TickBox.png";
import Tracking from "../../assets/Tracking.png";

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
            {imageUrl.map((img) => (
              <img src={img.data.homeHederImg5} alt="header-image" />
            ))}
          </div>
          <div className={styles.headerImage2}>
            {imageUrl.map((img) => (
              <img src={img.data.homeHederImg4} alt="header-image" />
            ))}
          </div>
          <div className={styles.headerImage3}>
            {imageUrl.map((img) => (
              <img src={img.data.homeHederImg2} alt="header-image" />
            ))}
          </div>
          <div className={styles.headerImage4}>
            {imageUrl.map((img) => (
              <img src={img.data.homeHederImg3} alt="header-image" />
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
            {imageUrl.map((img) => (
              <img src={img.data.homeHederImg1} alt="header-image" />
            ))}
            <h4>Order Accepted!</h4>
            <div className={styles.tick}><img src={TickBox} alt="" /></div>
            <h5>Your order will be delivered shortly</h5>
            </div>
          </div>
        </div>

        <div className={styles.section1}>
          <div className={styles.section1Header}>

          </div>

          <div className={styles.section1Image}>

          </div>
        </div>


      </div>
    </>
  );
};

export default Home;

// 2204641/login_image/home%20header%20image/xakhlkv77j7hexopkjdo.png"
// homeHederImg2
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732204641/login_image/home%20header%20image/tujsfpvwutquhftiwsry.png"
// homeHederImg3
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732204641/login_image/home%20header%20image/ndyiz7trlsmu3hdmxjow.png"
// homeHederImg4
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732204642/login_image/home%20header%20image/cjp1qyb21ptzlk4e0l4l.png"
// homeHederImg5
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732204642/login_image/home%20header%20image/widewqrwbqkmseiwjncc.png"
// homeSection1Img1
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205200/login_image/home%20header%20image/vfqgxnpo4jgmms1udxbg.png"
// homeSection1Img2
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205197/login_image/home%20header%20image/jhrfvaujrmhf59d9ypaw.png"
// homeSection1Img3
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205197/login_image/home%20header%20image/f9n9wi4zc6fep4zyha5t.png"
// homeSection2Img1
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205196/login_image/home%20header%20image/kkpz0hzq4qb3fk1ddhdz.png"
// homeSection2Img2
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205196/login_image/home%20header%20image/pzxachw07t9lky3lwita.png"
// homeSection2Img3
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205196/login_image/home%20header%20image/hu20ggst16yhsvclfbzk.png"
// homeSection2Img4
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205195/login_image/home%20header%20image/quwbvts6jwsuijpajnjt.png"
// homeSection2Img5
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205195/login_image/home%20header%20image/lwch7ufuxe1b5njexakl.png"
// homeSection2Img6
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205196/login_image/home%20header%20image/qzmf6knoht0dkome2gsd.png"
// homefooterImg1
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205641/login_image/home%20header%20image/te4uamz608k3ps2wjckv.png"
// homefooterImg2
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205643/login_image/home%20header%20image/vptx6giv86sonulmgrxo.png"
// homefooterImg3
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205639/login_image/home%20header%20image/yyzmvbsctg2x7mqpfhq5.png"
// loginImage
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732163763/login_image/ihtzqku4mofj7celq757.png"
// popularRestaurent1
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205404/login_image/home%20header%20image/ml88i23avwofpjt2ix9j.png"
// popularRestaurent2
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205405/login_image/home%20header%20image/fvddndp9bxqc3sqmqw95.png"
// popularRestaurent3
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205404/login_image/home%20header%20image/sueqqryz2wcdwhaw6tsx.png"
// popularRestaurent4
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205405/login_image/home%20header%20image/wr6lhg73jyl2of45jvks.png"
// popularRestaurent5
// :
// "https://res.cloudinary.com/dlmwurg10/image/upload/v1732205405/login_image/home%20header%20image/qkf5rujbnx7zks6ngnih.png"
