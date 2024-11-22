import React from "react";
import styles from "./Home.module.css";
import Nav from "../../components/Nav/Nav";
import NavBar from "../../components/Navbar/NavBar";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
       <Nav/>
       <NavBar/>
       <div className={styles.headerImages}>
        
       </div>
      </div>
    </>
  );
};

export default Home;
