import styles from "./login.module.css";
import LoginFooter from "./LoginFooter/LoginFooter";


import LoginHeader from "./LoginHeader/LoginHeader";

const Login = () => {

  return (
    <div className={styles.container}>
      <LoginHeader/>
      <LoginFooter/>
    </div>
  );
};

export default Login;
