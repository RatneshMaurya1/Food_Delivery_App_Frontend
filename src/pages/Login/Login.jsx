import React from "react";
import styles from "./login.module.css";
import loginIMG from "../../assets/login.png";
import headerLogo from "../../assets/LOGO.png";
import footerLogo from "../../assets/LOGO2.png";
import appStoreImg from "../../assets/appStore.png";
import playStoreImg from "../../assets/playStore.png";
import facebook from "../../assets/Facebook.png";
import instagram from "../../assets/Instagram.png";
import Tiktok from "../../assets/TikTok.png";
import snapchat from "../../assets/Snapchat.png";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.loginPage}>
          <div className={styles.items}>
            <div className={styles.loginLogoWrapper}>
              <div className={styles.loginLogo}>
                <img src={headerLogo} alt="loginLogo" />
              </div>
            </div>
            <div className={styles.loginWelcome}>
              <h1>Welcome Back 👋 </h1>
            </div>
            <div className={styles.loginDescription}>
              <p>
                Today is a new day. It's your day. You shape it. Sign in to
                start ordering.
              </p>
            </div>
            <form>
              <div className={styles.input}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Example@email.com"
                />
              </div>
              <div className={styles.input}>
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="At least 8 characters"
                />
              </div>
              <button className={styles.loginBtn} type="submit">
                Sign in
              </button>
            </form>
            <div className={styles.signup}>
              <p>
                Don't you have an account?<span> Sign up</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.loginImg}>
          <div className={styles.img}>
            <img src={loginIMG} alt="loginImg" />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerList1}>
          <div className={styles.listItems1}>
            <div className={styles.footerLogo}>
              <img src={footerLogo} alt="footerLogo-image" />
            </div>
            <div className={styles.store}>
              <div className={styles.store1}>
                <img src={appStoreImg} alt="appStore-image" />
              </div>
              <div className={styles.store2}>
                <img src={playStoreImg} alt="playStore-image" />
              </div>
            </div>
            <div className={styles.company}>
              <p>Company # 490039-445, Registered with</p>
              <p>House of companies.</p>
            </div>
          </div>

          <div className={styles.listItems2}>
            <div className={styles.item1}>
              <p className={styles.item1Heading}>
                Get Exclusive Deals in your Inbox
              </p>
              <div className={styles.item1Input}>
                <input type="text" readOnly placeholder="youremail@gmail.com" />
                <button>Subscribe</button>
              </div>
              <div className={styles.policy}>
                <h3>
                  we wont spam, read our <span>email policy</span>
                </h3>
              </div>
              <div className={styles.item1Logo}>
                <img src={facebook} alt="facebook_image" />

                <img src={instagram} alt="instagram_image" />

                <img src={Tiktok} alt="tiktok_image" />

                <img src={snapchat} alt="snapchat_image" />
              </div>
            </div>
            <div className={styles.item2}>
              <p>Legal Pages</p>
              <ul>
                <li>Terms and conditions</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Modern Slavery Statement</li>
              </ul>
            </div>
            <div className={styles.item3}>
              <p>Important Links</p>
              <ul>
                <li>Get help</li>
                <li>Add your restaurant</li>
                <li>Sign up to deliver</li>
                <li>Create a business account</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerList2}>
          <div className={styles.copyright}>
            <p>Order.uk Copyright 2024, All Rights Reserved.</p>
          </div>
          <div className={styles.terms}>
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>Pricing</p>
            <p>Do not sell or share my personal information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
