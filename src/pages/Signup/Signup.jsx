import React from "react";
import styles from "./signup.module.css";
import SignupFooter from "./SignupFooter/SignupFooter";
import SignupHeader from "./SignupHeader/SignupHeader";

const Signup = () => {
  return (
    <div className={styles.container}>
      <SignupHeader />
      <SignupFooter />
    </div>
  );
};

export default Signup;
